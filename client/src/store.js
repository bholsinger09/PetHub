import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api = Axios.create({
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZiNTQ2ZmZkNTdkMmViMGRmNmNhZmVjNzBjZjE4YzU4NmZjYjUwZjhlZGRlYzVmZjdiODc5YTgxNmYwNmU0ZTEwZTE1YThiMDI5YTBkZTZhIn0'
  }
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
    // getStuff() {
    //   api.get("", {
    //     headers: {
    //       Authorization: ""
    //     }
    //   })
    // }, //getStuff
    async petSearch({ commit, dispatch }, payload) {
      debugger
      try {
        let res = await api.get(payload)
        console.log(res.data)
        commit('setPets', res.data)
      } catch (error) { console.log(error) }
    }, //petSearch

  }//actions
})
