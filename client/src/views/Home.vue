<template>
  <div class="home">

    <carousel />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel.vue'
  import FeaturedPets from '@/components/Carousel.vue'

  export default {
    name: 'home',
    components: {
      Carousel
    }
  }
</script>