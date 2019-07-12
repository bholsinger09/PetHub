<template>
  <div class="search-results">
    <!-- </router-link> -->
    <pets :searchConfig="searchConfig" />
  </div>
</template>

<script>
  import Pets from '@/components/Pets.vue'

  export default {
    name: 'results',
    props: ['searchConfig'],
    components: {
      Pets
    }
  }
</script>