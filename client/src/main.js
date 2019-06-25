import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MQ from "vue-mq"

Vue.config.productionTip = false


// setup VUE MQ breakpoints
Vue.use(MQ, {
  breakpoints: {
    xs: 575.98,
    sm: 767.98,
    md: 991.98,
    lg: 1199.98,
  }
})
new Vue({
  router,
  store,
  beforeCreate() {
    store.dispatch("authenticate")
  },
  render: function (h) { return h(App) }
}).$mount('#app')
