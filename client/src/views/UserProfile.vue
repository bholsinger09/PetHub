<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <h1>Favorites</h1>
        <Favorites />
        <div class="col-6"></div>
        <div class="col-6">
          <h1>Searches</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1>Settings</h1>
          <p>Name:{{user.name}}</p>
          <p>Pic:{{user.pic}}</p>
          <p>email:{{user.email}}</p>
          <p>Location:{{user.zip}}</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import Favorites from '@/components/Favorites.vue'

  export default {
    name: 'UserProfile',
    data() {
      return {

      }

    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    components: {
      Favorites
    }

  }

</script>

<style>

</style>