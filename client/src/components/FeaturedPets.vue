<template>
  <div id="pets-featured" class="container">
    <div class="searchCard row">
      <div class="card col-12 col-sm-6 col-md-3 d-flex justify-content-between align-items-center" v-for="pet in pets"
        :value="pet.id" style="border-radius: 10px; margin-top: 20px; ">
        <img class="card-img-top  mt-2 img-fluid" :src="getPicture(pet.photos)" alt="Card image cap"
          style="object-fit: fill; width: 300px; height: 300px;">
        <div class="card-body">
          <h5 class="card-title">{{pet.name}}</h5>
          <p class="card-text"> {{pet.breeds.primary}}</p>
          <button class="btn btn-primary">Favorite</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import defaultImg from '@/assets/dogcat.png'

  export default {
    name: "Featured",
    props: ["pets"],
    data() {
      return {}
    },
    methods: {
      getPicture(photos) {
        if (!photos.length) { return defaultImg }
        return photos[0].medium
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