import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api = Axios.create({
  baseURL: '//localhost:3000/api'
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
    }
  },
  actions: {
    async petSearch({ commit, dispatch }) {
      debugger
      try {
        let res = await api.get('animals')
        console.log(res.data)
        commit('setPets', res.data)
      } catch (error) { console.log(error) }
    }, //petSearch


  }//actions
})
