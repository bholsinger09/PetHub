<template>
  <div>
    <favorites />
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