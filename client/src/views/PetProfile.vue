<template>
  <div>
    <div class="col-6 col-sm-12">
      </router-link>
      <img class="petFull" src="pet.photos.full" alt="Card image cap">
    </div>

    <div class="col-6 col-sm-12">
      <!-- <h2 v-if="pet.adoptable==false" style="color: #750000">This good boy/girl has found a home.</h2> -->
      <h2 class="card-title">{{pet.name}}</h2>
      <p class="card-text">{{pet.description}}</p>
    </div>

  </div>

</template>

<script>
  export default {
    name: "petprofile",
    data() {
      return {
        pet: {}
      }
    },
    mounted() {
      this.$store.dispatch('setPet')

    },
    computed: {
      pet() {
        return this.$store.state.pet;
      }
    },
  }
</script>

<style>
</style>