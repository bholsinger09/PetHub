<template>
  <div id="pets-featured">
    <div class="searchCard row">
      <div class="card" v-for="pet in pets" :value="pet.id" @click="goToPet">
        <img class="card-img-top" src="pet.name.medium" alt="Card image cap">
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

    }
  }

</script>

<style>

</style>