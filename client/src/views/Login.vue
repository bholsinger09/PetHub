<template>
  <div class="container-fluid" id="login-registration">
    <!-- </router-link> -->
    <div class="row">
      <div class="col">
        <form @submit.prevent="registerUser">
          <input type="text" v-model="userReg.name" placeholder="name">
          <input type="email" v-model="userReg.email" placeholder="email">
          <input type="text" v-model="userReg.zip" placeholder="enter zip code">
          <input type="password" v-model="userReg.password" placeholder="enter password">
          <button class="btn-sm btn-success">Create Account</button>
        </form>
      </div>
      <div class="col">
        <div id="user-login">
          <form style="float: right;" @submit.prevent="loginUser()">
            <input type="email" v-model="creds.email" placeholder="email">
            <input type="password" v-model="creds.password" placeholder="enter password">
            <button class="btn btn-info">Login</button>
          </form>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  export default {
    name: "Login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: '',
          password: ''
        },
        userReg: {
          name: '',
          email: '',
          zip: '',
          password: ''
        }
      }
    },
    mounted() {
      //Authenticate on startup
      //this.$store.dispatch('authenticate')

    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },

    methods: {
      loginUser() {
        this.$store.dispatch("loginUser", this.creds);
        // this.$router.push({ path: 'home' })
      },
      registerUser() {
        this.$store.dispatch("registerUser", this.userReg)
      },


    }
  }
</script>

<style>

</style>