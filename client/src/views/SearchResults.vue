<template>
  <div class="search-results">
    </router-link>
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