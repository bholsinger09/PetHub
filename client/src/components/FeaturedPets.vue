<template>
  <div id="pets-featured">
    <div class="searchCard row">
      <div class="card" v-for="pet in pets" :value="pet.id" @click="goToPet" style="width: 10rem;">
        <img class="card-img-top" :src="getPicture(pet.photos)" alt="Card image cap" style="height: 10rem;">
        <div class="card-body">
          <h5 class="card-title">{{pet.name}}</h5>
          <p class="card-text"> {{pet.breeds.primary}}</p>
          <button href="#" class="btn btn-primary">Favorite</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Featured",
    data() {
      return {}
    },
    methods: {
      getPicture(photos) {
        if (!photos.length) return '//placehold.it/200X200'
        return photos[0].small
      }
    },
    computed: {
      pets() {
        return this.$store.state.pets
      }
    },
  }

</script>

<style>

</style>