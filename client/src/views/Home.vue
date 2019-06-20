<template>
  <div class="home">

    <carousel />
    <featured-pets />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel.vue'
  import FeaturedPets from '@/components/FeaturedPets.vue'

  export default {
    name: 'home',
    components: {
      Carousel,
      FeaturedPets,
    },
    mounted() {
      this.$store.dispatch('getFeaturedPets')
    },

  }
</script>