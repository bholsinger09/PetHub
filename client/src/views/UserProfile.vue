<template>
  <div class="container-fluid" id="user-profile">
    <div class="row">
      <div class="col" id="loginForm">

        <form v-if="loginForm" @submit.prevent="userLogin">
          <input type="email" v-model="creds.email" placeholder="email">
          <input type="text" v-model="creds.password" placeholder="enter password">
        </form>
        <form v-else @submit.prevent="registerUser">
          <input type="text" v-model="userReg.name" placeholder="name">
          <input type="email" v-model="userReg.email" placeholder="email">
          <input type="text" v-model="userReg.zip" placeholder="enter zip code">
          <input type="text" v-model="userReg.password" placeholder="enter password">
          <button class="btn btn-info">Create Account</button>
        </form>
      </div>
    </div>


  </div>
</template>

<script>

  export default {
    name: 'UserProfile',
    data: {
      return: {
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
    }
  }

</script>

<style>

</style>