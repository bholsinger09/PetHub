<template>
  <div id="app">
    <div id="nav">
      <!-- <img src="../src/assets/dogcat.png" alt="Pethub Logo" style="float: left; width: 50px;"> -->
      <router-link to="/"><img src="../src/assets/dogcat.png" alt="Pethub Logo"
          style="float: left; width: 50px; margin-bottom: 20px">
        <h4 style="float: left; padding-top: 10px; color: #28a745;">PetHub</h4>
      </router-link>
      <router-link to="/results">Search</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'forum'}">Forum</router-link>
      <div v-if="!user._id" style="float: right;">
        <router-link to="/login">
          <button class="btn btn-warning ">Login Page</button>
        </router-link>
      </div>
      <div v-else style="float: right;">
        <router-link :to="{name: 'userProfile', params: {id: user._id}}">My Account</router-link>
        <p>Welcome: {{user.name}}</p>
        <button class="btn btn-warning m-2" @click="logout">Logout</button>
      </div>
      <br />
      <br></br>
    </div>
    <router-view />
    <site-map />
  </div>
</template>

<script>
  import SiteMap from '@/components/Footer.vue'

  export default {
    name: "App",
    methods: {
      logout() {
        this.$store.dispatch("logout")
      },
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    components: {
      SiteMap,
    },
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