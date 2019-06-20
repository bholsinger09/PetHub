<template>
  <div class="search-results">
    <pets />
  </div>
</template>

<script>
  import Pets from '@/components/Pets.vue'

  export default {
    name: 'results',
    components: {
      Pets
    }
  }
</script>