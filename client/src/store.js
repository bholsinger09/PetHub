import Vue from 'vue'
import Vuex from 'vuex'
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
    setPet(state, id) {
      state.pet = id
    }
  },
  actions: {
    async petSearch({ commit, dispatch }, payload) {
      debugger
      try {
        let res = await api.get('pet-api?' + "type=" + payload.dogOrCat + "&age=" + payload.age + "&gender=" + payload.gender + "&size=" + payload.size + "&breed=" + payload.breed)
        console.log(res)
        commit('setPets', res.data)
      } catch (error) { console.log(error) }
    }, //petSearch

    setPet({ commit, dispatch }, id) {
      commit("setPet", id)
    }

    // async getPetById({ commit, dispatch }, payload) {
    //   try {
    //     let res = await api.get('animals' + )
    //     commit('')

    //   } catch (error) { console.log(error) }
    // }


  }//actions
})
