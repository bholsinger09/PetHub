<template>
  <div id="app">
    <div id="nav">
      <!-- <img src="../src/assets/dogcat.png" alt="Pethub Logo" style="float: left; width: 50px;"> -->
      <router-link to="/"><img src="../src/assets/dogcat.png" alt="Pethub Logo"
          style="float: left; width: 50px; margin-bottom: 20px">
        <h4 style="float: left; padding-top: 10px;">PetHub</h4>
      </router-link>
      <router-link to="/results">Search</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/userprofile">My Account</router-link>

      <div id="user-login">
        <form style="float: right;" @submit.prevent="loginUser">
          <input type="text" v-model="creds.email" placeholder="email">
          <input type="text" v-model="creds.password" placeholder="enter password">
          <button class="btn btn-info">Login</button>
        </form>
      </div>

    </div>
    <router-view />
    <site-map />
  </div>
</template>

<script>
  import SiteMap from '@/components/Footer.vue'

  export default {
    data() {
      return {
        loginForm: true,
        creds: {
          email: '',
          password: ''
        },
      }
    },
    components: {
      SiteMap,
    },
    methods: {
      loginUser() {
        this.$store.dispatch("loginUser", this.creds)
      }
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>