import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api = Axios.create({
  baseURL: '//localhost:3000/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    getStuff() {
      api.get("", {
        headers: {
          Authorization: ""
        }
      })
    }
  }
})
