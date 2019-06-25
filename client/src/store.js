import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import Axios from 'axios'

Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000' : '/'

let api = Axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 3000,
  withCredentials: true
})

let auth = Axios.create({
  baseURL: "http://localhost:3000/api/auth/",
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
    posts: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPets(state, data) {
      state.pets = data
    },
    setPet(state, data) {

      state.pet = data
    },
    setTopics(state, data) {
      state.topics = data
    },
    setPosts(state, data) {
      state.posts = data
    }
  },
  actions: {
    //#region -- Auth Stuff --
    registerUser({ commit, dispatch }, newUser) {
      // debugger
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          //router.push({ name: 'boards' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    loginUser({ commit, dispatch }, creds) {
      // debugger
      auth.post('login', creds)

        .then(res => {
          console.log(res.data)
          commit('setUser', res.data)
          router.push({ name: 'userprofile' })

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
        let res = await api.get('pet-api?' + "type=" + payload.dogOrCat + "&age=" + payload.age + "&gender=" + payload.gender + "&size=" + payload.size + "&breed=" + payload.breed)
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
      // debugger
      try {
        let res = await api.get('pet-api/' + payload)
        console.log(res.data.animal)

        commit('setPet', res.data.animal)
        router.push({ name: 'petprofile', params: { id: res.data.animal.id } })
      } catch (error) { console.log(error) }
    },
    //#endregion

    async updateUser({ commit, dispatch }, payload) {
      try {
        let res = await auth.put(payload._id, payload)
        commit("setUser", res.data)
        console.log(res.data)
      } catch (error) { console.log(error) }
    },

    async getPosts({ commit, dispatch }, topicId) {
      try {
        let res = await api.get('topics/' + topicId + '/posts')
        commit('setPosts', res.data)
      } catch (error) { console.log(error) }
    },
    async getAllTopics({ commit, dispatch }) {
      try {
        let res = await api.get("topic")
        commit("setTopics", res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)

      }
    }


  }//actions
})
