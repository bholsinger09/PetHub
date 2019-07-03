<template>
  <div class="container-fluid SiteMap" style="margin-top: 20px;">
    <div class="row">
      <div class="col-4">
        <router-link to="/">Home</router-link> Search Forum <router-link to="/about">About</router-link> My Account
      </div>
      <div class="col-4">Text about stuff page</div>
      <div class="col-4">Other?</div>
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
    height: 100px;
    background-color: rgb(82, 82, 82)
  }
</style>