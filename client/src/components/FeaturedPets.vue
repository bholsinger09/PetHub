<template>
  <div id="pets-featured" class="container w90">
    <div class="searchCard row">
      <div class="card col-12 col-sm-6 col-md-3 d-flex justify-content-between align-items-center" v-for="pet in pets"
        :value="pet.id" style="border-radius: 10px; margin-top: 20px; padding: 10px; ">
        <img class="mt-2 w-100" :src="getPicture(pet.photos)"
          :height="$mq | mq({xs: '250px', sm: '200px', md: '200px', lg: '250px'})" alt="Card image cap">
        <div class="card-body"></div>
        <h5 class="card-title">{{pet.name}}</h5>
        <p class="card-text"> {{pet.breeds.primary}}</p>
        <button class="btn-sm btn-success" @click="goToPet(pet.id)" style="margin: 20px;">View Pet</button>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
  import defaultImg from '@/assets/dogcat.png'

  export default {
    name: "Featured",
    //props: ["pets"],
    data() {
      return {}
    },
    methods: {
      goToPet(id) {
        this.$store.dispatch("getPetById", id)
      },
      getPicture(photos) {
        if (!photos.length) { return defaultImg }
        return photos[0].large
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
  .w90 {
    width: 90% !important;
  }
</style>