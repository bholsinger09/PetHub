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
      <router-link :to="{name: 'userProfile', params: {id: user._id}}">My Account</router-link> |
      <router-link :to="{name: 'forum'}">Forum</router-link>
      <div v-if="!user._id" style="float: right;">
        <router-link to="/login">
          <button class="btn btn-warning">Login Page</button>
        </router-link>
      </div>
      <div v-else style="float: right;">
        <p>Logged in as: {{user.name}}</p>
        <button class="btn btn-warning" @click="logout">Logout</button>
      </div>
    </div>
    </br>
    <router-view />
    <site-map />
  </div>
</template>

<script>
  import SiteMap from '@/components/Footer.vue'

  export default {
    mounted() {
      //Authenticate on startup
      this.$store.dispatch('authenticate')
      setTimeout(() => {
        if (!this.$store.state.user._id) {
          this.$router.push({ name: "login" });
        }
      }, 1000)
    },


    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout")
      },
      goToUser() {
        this.$store.dispatch("goToUser")
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