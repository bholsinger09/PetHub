import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import Axios from 'axios'

let api = Axios.create({
  baseURL: 'http://localhost:3000/api/'
})

let auth = Axios.create({
  baseURL: api + "auth/",
  timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    pets: [],
    pet: {}
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
    }
  },
  actions: {
    //#region -- Auth Stuff --
    registerUser({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
    },
    loginUser({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)

        })
    },

    //#endregion

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
    }


  }//actions
})
