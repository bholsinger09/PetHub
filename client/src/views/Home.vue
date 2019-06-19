<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <carousel />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel.vue'

  export default {
    name: 'home',
    components: {
      Carousel
    }
  }
</script>