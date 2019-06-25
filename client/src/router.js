import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SearchResults from './views/SearchResults.vue'
import petprofile from './views/PetProfile.vue'
import UserProfile from './views/UserProfile.vue'
import Login from './views/Login.vue'
import Forum from './views/Forum.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/results',
      name: 'results',
      component: SearchResults
    },
    {
      path: '/petprofile/:id',
      name: 'petprofile',
      props: true,
      component: petprofile
    },
    {
      path: '/userprofile/:id',
      name: 'userProfile',
      props: true,
      component: UserProfile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    }
  ]
})
