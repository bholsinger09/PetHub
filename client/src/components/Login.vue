<template>

  <div class="container-fluid" id="login">
    <div class="row">
      <div class="col" id="loginForm">

        <form v-if="loginForm" @submit.prevent="userLogin">
          <input type="email" v-model="creds.email" placeholder="email">
          <input type="text" v-model="creds.password" placeholder="enter password">
          <button class="btn btn-info">Login</button>
        </form>
        <form v-else @submit.prevent="registerUser">
          <input type="text" v-model="userReg.name" placeholder="name">
          <input type="email" v-model="userReg.email" placeholder="email">
          <input type="text" v-model="userReg.zip" placeholder="enter zip code">
          <input type="text" v-model="userReg.password" placeholder="enter password">
          <button class="btn btn-info">Create Account</button>
        </form>
        <div class="action d-flex justify-content-center" @click="loginForm = !loginForm">
          <p v-if="loginForm">Click here to Register</p>
          <p v-else>Click here to Login</p>
        </div>
      </div>
    </div>
  </div>
</template>