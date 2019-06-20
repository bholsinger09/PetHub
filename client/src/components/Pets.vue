<template>
  <div id="pets-results">

    <form @submit.prevent="petSearch" class="searchForm">
      <i class="fas fa-cat"></i> <i class="fas fa-dog"></i>
      <input type="text" v-model="searchParams.dogOrCat" placeholder="dog or cat">

      <input type="text" v-model="searchParams.breed" placeholder="breed">

      <input type="text" v-model="searchParams.age" placeholder="age">

      <div id='age' v-model="searchParams.age">
        <input type="checkbox" id="baby" value="baby" v-model="checkedAge">
        <label for="Baby">Baby</label>
        <input type="checkbox" id="Young" value="Young" v-model="checkedAge">
        <label for="Young">Young</label>
        <input type="checkbox" id="Adult" value="Adult" v-model="checkedAge">
        <label for="Adult">Adult</label>
        <input type="checkbox" id="Seinor" value="Seinor" v-model="checkedAge">
        <label for="Seinor">Seinor</label>
        <br>
        <!-- <span>Checked Age: {{ checkedAge }}</span> -->
      </div>

      <input type="text" v-model="searchParams.size" placeholder="size">

      <input type="text" v-model="searchParams.gender" placeholder="gender">

      <input type="text" v-model="searchParams.location" placeholder="postal code">

      <button type="submit">Find</button>
    </form>

    <h1>cards of pets should show up</h1>
    <div class="searchCard row">
      <div class="card" v-for="pet in pets" :value="pet.id" @click="goToPet">
        <img class="card-img-top" :src="getPicture(pet.photos)" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{pet.name}}</h5>
          <p class="card-text"> {{pet.breeds.primary}}</p>
          {{pet.photos.small}}
          <router-link to="/profile">
            <button class="btn btn-primary m-2" @click="goToPet(pet.id)">View Pet</button>
          </router-link>
          <button class="btn btn-primary m-2">Favorite</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "pets",
    data() {
      return {
        searchParams: {
          dogOrCat: "",
          breed: "",
          age: "",
          size: "",
          gender: "",
          location: ""
        }
      }
    },

    mounted() {
      this.$store.dispatch('getPets')
    },
    methods: {
      goToPet(id) {
        this.$store.dispatch("getPetById", id)
      },
      petSearch() {
        console.log(this.searchParams)
        this.$store.dispatch('petSearch', this.searchParams)
      },
      getPicture(photos) {
        if (!photos.length) return '//placehold.it/200x200'
        return photos[0].small
      }
    },
    computed: {
      pets() {
        return this.$store.state.pets;
      }
    }
  }

</script>

<style>
</style>