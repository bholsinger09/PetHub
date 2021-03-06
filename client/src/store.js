import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import Axios from 'axios'

Vue.use(Vuex)

let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + 'api',
  timeout: 3000,
  withCredentials: true
})

let auth = Axios.create({
  baseURL: base + "api/auth",
  // timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    pets: [],
    pet: {},
    topics: [],
    activeTopic: {},
    posts: [],
    redirect: {}
  },
  mutations: {
    setUser(state, user = {}) {
      state.user = user
    },
    setPets(state, data) {
      state.pets = data
    },
    setPet(state, data = {}) {
      state.pet = data
    },
    setTopics(state, data) {
      state.topics = data
    },
    setActiveTopic(state, id) {
      state.activeTopic = id
    },
    setPosts(state, data) {
      state.posts = data
    },
    setRedirect(state, redirect) {
      state.redirect = redirect
    }
  },
  actions: {
    //#region -- Auth Stuff --
    registerUser({ commit, dispatch, state }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          if (state.redirect.name) {
            router.push(state.redirect)
            commit("setRedirect", {})
          } else {
            router.push({ name: 'home' })
          }
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(res => {
          // router.push({ name: 'login' })
        })
    },
    loginUser({ commit, dispatch, state }, creds) {
      auth.post('login', creds)

        .then(res => {
          console.log(res.data)
          commit('setUser', res.data)
          if (state.redirect.name) {
            router.push(state.redirect)
            commit("setRedirect", {})
          } else {
            router.push({ name: 'home' })
          }
        })
    },
    logout({ commit }) {
      auth.delete("logout")
        .then(res => {
          commit("setUser", {})
          router.push({ name: 'home' })
        })
    },
    //#endregion

    //#region -- Pet Search Stuff --
    async petSearch({ commit, dispatch }, payload) {
      try {
        let res = await api.get('pet-api?' + "type=" + payload.type + "&age=" + payload.age + "&gender=" + payload.gender + "&size=" + payload.size + "&breed=" + payload.breeds)
        console.log(res)
        commit('setPets', res.data)
      } catch (error) { console.log(error) }
    }, //petSearch
    async getFeaturedPets({ commit, dispatch }) {
      try {
        let res = await api.get('pet-api?' + "type=dog&" + "sort=random&" + "limit=8")
        console.log(res)
        commit('setPets', res.data)
      } catch (error) {
        console.log(error)
      }
    },
    setPet({ commit, dispatch }, data) {
      commit("setPet", data)
    },

    async getPetById({ commit, dispatch }, payload) {

      try {
        let res = await api.get('pet-api/' + payload)
        console.log("ANIMAL", res.data)

        commit('setPet', res.data.animal)
        router.push({ name: 'petprofile', params: { id: res.data.animal.id } })
      } catch (error) { console.log(error) }
    },
    //#endregion

    async updateUser({ commit, dispatch }, payload) {
      try {
        console.log('before update', payload)
        let res = await auth.put(payload._id, payload)
        commit("setUser", res.data)
        console.log('after', res.data)
      } catch (error) { console.log(error) }
    },
    async saveSearch({ commit, dispatch, state }, payload) {
      try {
        let updatedUser = state.user
        updatedUser.searches.push(payload)
        let res = await auth.put(payload.userId, updatedUser)
        commit("setUser", res.data)
        console.log(res.data)
      } catch (error) { console.log(error) }
    },
    async getAllTopics({ commit, dispatch }) {
      try {
        let res = await api.get("topic")
        commit("setTopics", res.data)
        console.log(res)
      } catch (error) { console.log(error) }
    },

    async getTopic({ commit, dispatch }, payload) {
      try {
        let res = await api.get("topic/" + payload)
        commit("setActiveTopic", res.data)
        console.log(res)
        router.push({ name: 'topic', params: { id: payload } })
      } catch (error) { console.log(error) }
    },

    async getPosts({ commit, dispatch }, topicId) {
      try {

        let res = await api.get('topic/' + topicId + '/post')
        commit('setPosts', res.data)
        console.log("posts", res.data)
      } catch (error) { console.log(error) }
    },
    createPost({ commit, dispatch }, payload) {
      api.post('post/', payload)
        .then(res => {
          console.log({ res })
          dispatch('getPosts', payload.topicId)
        })
    },

    updatePost({ commit, dispatch }, post) {
      api.put('post/' + post._id, post)
        .then(res => {
          dispatch('getPosts', post.topicId)
        })
    },
    deletePost({ commit, dispatch }, post) {
      api.delete('post/' + post._id)
        .then(res => {
          dispatch('getPosts', post.topicId)
        })
    },


    async removeSearch({ commit, dispatch, state }, id) {
      try {
        let res = await auth.delete('searches/' + id)
        commit("setUser", res.data)
        console.log(res.data)
      } catch (error) { console.log(error) }
    },

    async removeFavorite({ commit, dispatch, state }, id) {
      try {
        let res = await auth.delete('favorites/' + id)
        commit("setUser", res.data)

      } catch (error) {
        console.log(error)

      }


    }


  }//actions
})
