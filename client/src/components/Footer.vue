<template>
  <div class="container-fluid SiteMap" style="margin-top: 20px;">
    <div class="row">
      <div class="col-12" id="footer">
        <router-link to="/" class="text-white">Home</router-link> •
        <router-Link to="/results" class="text-white">Search</router-Link> •
        <router-link to="/forum" class="text-white">Forum</router-link> •
        <router-link to="/about" class="text-white">About</router-link>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "SiteMap",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>
<style>
  .SiteMap {
    height: 50px;
    background-color: rgb(82, 82, 82)
  }

  #footer {
    display: flex;
    justify-content: center;
    margin-top: 1%;
  }
</style>