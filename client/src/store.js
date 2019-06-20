import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import Axios from 'axios'

let api = Axios.create({
  baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pets: [],
    pet: {}
  },
  mutations: {
    setPets(state, data) {
      state.pets = data
    },
    setPet(state, data) {
      debugger
      state.pet = data
    }
  },
  actions: {
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
        router.push({ name: 'petprofile' })
      } catch (error) { console.log(error) }
    }


  }//actions
})
