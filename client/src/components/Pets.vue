<template>
  <div id="pets-results">

    <form @submit.prevent="petSearch" class="searchForm">

      <input type="text" v-model="searchParams.dogOrCat" placeholder="dog or cat">
      <div id='dogOrCat'>
        <input type="radio" class="hidden" id="dog" value="dog" v-model="searchParams.dogOrCat">
        <label for="dog"><i class="fas fa-dog fa-lg"></i></label>
        <input type="radio" class="hidden" id="cat" value="cat" v-model="searchParams.dogOrCat">
        <label for="cat"><i class="fas fa-cat fa-lg"></i></label>
        <br>
      </div>


      <input type="text" v-model="searchParams.age" placeholder="age">
      <div id='age'>
        <!-- <p>{{searchParams.age}}</p> -->
        <input type="checkbox" class="hidden" id="baby" value="baby" v-model="searchParams.age">
        <label for="Baby">Baby</label>
        <input type="checkbox" class="hidden" id="Young" value="Young" v-model="searchParams.age">
        <label for="Young">Young</label>
        <input type="checkbox" class="hidden" id="Adult" value="Adult" v-model="searchParams.age">
        <label for="Adult">Adult</label>
        <input type="checkbox" class="hidden" id="Seinor" value="Seinor" v-model="searchParams.age">
        <label for="Seinor">Seinor</label>
        <br>
      </div>

      <input type="text" v-model="searchParams.size" placeholder="size">
      <div id='size'>
        <input type="checkbox" class="hidden" id="small" value="small" v-model="searchParams.size">
        <label for="small">
          <h3><i class="fas fa-cat fa-sm"></i></h3>
        </label>
        <input type="checkbox" class="hidden" id="medium" value="medium" v-model="searchParams.size">
        <label fo1r="medium">
          <h2><i class="fas fa-dog fa-md"></i></h2>
        </label>
        <input type="checkbox" class="hidden" id="large" value="large" v-model="searchParams.size">
        <label for="large">
          <h2><i class="fas fa-cat fa-lg"></i></h2>
        </label>
        <input type="checkbox" class="hidden" id="xlarge" value="xlarge" v-model="searchParams.size">
        <label for="xlarge">
          <h2><i class="fas fa-dog fa-2x"></i></h2>
        </label>
        <br>
      </div>

      <input type="text" v-model="searchParams.gender" placeholder="gender">
      <div id='gender'>
        <input type="checkbox" class="hidden" id="male" value="male" v-model="searchParams.gender">
        <label for="male">Male<i class="fas fa-mars"></i>
        </label>
        <input type="checkbox" class="hidden" id="female" value="female" v-model="searchParams.gender">
        <label for="female">Female<i class="fas fa-venus"></i>
        </label>
      </div>


      <input type="text" v-model="searchParams.breed" placeholder="breed">

      <input type="text" v-model="searchParams.location" placeholder="postal code">

      <button type="submit">Find</button>
    </form>

    <h1>cards of pets should show up</h1>
    <div class="searchCard row">
      <div class="card" v-for="pet in pets" :value="pet.id">
        <img class="card-img-top" :src="getPicture(pet.photos)" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{pet.name}}</h5>
          <p class="card-text"> {{pet.breeds.primary}}</p>
          {{pet.photos.small}}

          <button class="btn btn-primary m-2" @click="goToPet(pet.id)">View Pet</button>

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
          breed: [],
          age: [],
          size: [],
          gender: [],
          location: ""
        }
      }
    },

    mounted() {

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
  .hidden {
    visibility: hidden;
  }

  .fas:checked {
    color: blue;
    background-color: blueviolet;
  }

  .fas:active {
    color: #750000;
    /* color: #ffff379b; */
    text-shadow: #d48b36;
  }
</style>