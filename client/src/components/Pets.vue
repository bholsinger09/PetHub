<template>
  <div id="pets-results">

    <form @submit.prevent="petSearch" class="searchForm container-fluid">
      <div class="row">

        <!-- <input type="text" v-model="searchParams.dogOrCat" placeholder="dog or cat"> -->
        <div class=" col-md-2 col-sm-6" id='dogOrCat'>

          <h3>Animal:
            <input type="radio" class="hidden" id="dog" value="dog" v-model="searchParams.dogOrCat">
            <label for="dog"><i class="fas fa-dog fa-lg" @click="activeDog = !activeDog"
                :class="{selected: activeDog}"></i></label>
            <input type="radio" class="hidden" id="cat" value="cat" v-model="searchParams.dogOrCat">
            <label for="cat"><i class="fas fa-cat fa-lg" @click="activeCat = !activeCat"
                :class="{selected: activeCat}"></i></label>
          </h3>

        </div>


        <!-- <input type="text" v-model="searchParams.age" placeholder="age"> -->
        <div class=" col-md-4  col-sm-6" id='age'>
          <!-- <p>{{searchParams.age}}</p> -->
          <h3>Age: <input type="checkbox" class="hidden" id="baby" value="baby" v-model="searchParams.age">
            <label for="Baby" @click="activeBaby = !activeBaby" :class="{selected: activeBaby}">Baby</label>
            <input type="checkbox" class="hidden" id="Young" value="Young" v-model="searchParams.age">
            <label for="Young" @click="activeYoung = !activeYoung" :class="{selected: activeYoung}">Young</label>
            <input type="checkbox" class="hidden" id="Adult" value="Adult" v-model="searchParams.age">
            <label for="Adult" @click="activeAdult = !activeAdult" :class="{selected: activeAdult}">Adult</label>
            <input type="checkbox" class="hidden" id="Seinor" value="Seinor" v-model="searchParams.age">
            <label for="Seinor" @click="activeSeinor = !activeSeinor" :class="{selected: activeSeinor}">Senior</label>
          </h3>
        </div>

        <!-- <input type="text" v-model="searchParams.size" placeholder="size"> -->
        <div class="col-md-3 col-sm-6" id='size'>
          <input type="checkbox" class="hidden" id="small" value="small" v-model="searchParams.size">
          <label for="small">
            <h3>Size: <i class="fas fa-cat fa-sm" @click="activeSmall = !activeSmall"
                :class="{selected: activeSmall}"></i></h3>
          </label>
          <input type="checkbox" class="hidden" id="medium" value="medium" v-model="searchParams.size">
          <label for="medium">
            <h2><i class="fas fa-dog fa-md" @click="activeMedium = !activeMedium" :class="{selected: activeMedium}"></i>
            </h2>
          </label>
          <input type="checkbox" class="hidden" id="large" value="large" v-model="searchParams.size">
          <label for="large">
            <h2><i class="fas fa-cat fa-lg" @click="activeLarge = !activeLarge" :class="{selected: activeLarge}"></i>
            </h2>
          </label>
          <input type="checkbox" class="hidden" id="xlarge" value="xlarge" v-model="searchParams.size">
          <label for="xlarge">
            <h2><i class="fas fa-dog fa-2x" @click="activeXLarge = !activeXLarge" :class="{selected: activeXLarge}"></i>
            </h2>
          </label>
        </div>

        <!-- <input type="text" v-model="searchParams.gender" placeholder="gender"> -->
        <div class="col-md-3 col-sm-6" id='gender'>
          <h3>Gender: <input type="checkbox" class="hidden" id="male" value="male" v-model="searchParams.gender">
            <label for="male"><i class="fas fa-mars" @click="activeMars = !activeMars" :class="{selected: activeMars}">
              </i>
            </label>
            <input type="checkbox" class="hidden" id="female" value="female" v-model="searchParams.gender">
            <label for="female"> <i class="fas fa-venus" @click="activeVenus = !activeVenus"
                :class="{selected: activeVenus}"></i>
            </label></h3>
        </div>

        <input class="col-md-2 col-sm-4 offset-md-1" type="text" v-model="searchParams.breed" placeholder="breed">

        <input class="col-md-2 col-sm-4 offset-md-1" type="text" v-model="searchParams.location"
          placeholder="postal code">

        <button class="offset-md-1 col-md-1 col-sm-2 " type="submit"><i class="fas fa-search"></i>
        </button>
      </div>
    </form>

    <div class="container-fluid">
      <div class="searchCard row">
        <div class="card col-12 col-sm-6 col-md-3 d-flex justify-content-between align-items-center" v-for="pet in pets"
          :value="pet.id" style="border-radius: 10px; margin-top: 20px;">
          <img class="card-img-top mt-2" :src="getPicture(pet.photos)"
            :height="$mq | mq({xs: '250px', sm: '200px', md: '200px', lg: '250px'})" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{pet.name}}</h5>
            <p class="card-text"> {{pet.breeds.primary}}</p>
            {{pet.photos.small}}
            <router-link to="/profile">
              <button class="btn btn-primary m-2" @click="goToPet(pet.id)">View Pet</button>
            </router-link>
            <button class="btn btn-primary m-2" @click="addFavorite(pet.id)">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import defaultImg from '@/assets/dogcat.png'
  export default {
    name: "pets",
    data() {
      return {
        activeDog: false,
        activeCat: false,
        activeBaby: false,
        activeYoung: false,
        activeAdult: false,
        activeSeinor: false,
        activeSmall: false,
        activeMedium: false,
        activeLarge: false,
        activeXLarge: false,
        activeMars: false,
        activeVenus: false,
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
        if (!photos.length) { return defaultImg }
        return photos[0].large
      },
      addFavorite(id) {//we need to render the user data with the pet id to upddate the user - HOW?????
        // let favorite = { ... this.id, userId: this.user._id };
        debugger
        let favorite = { petId: id }
        this.user.favorites.push(favorite)
        // this.userId.favorites.push(favorite);
        this.$store.dispatch('updateUser', this.user)
      }
    },
    computed: {
      pets() {
        return this.$store.state.pets;
      },
      user() {
        return this.$store.state.user;
      }
    }
  }

</script>

<style>
  .hidden {
    visibility: hidden;
  }

  .fas:active {
    color: #ffff379b;
  }

  .selected {
    color: #75000030;
    text-shadow: #d48b36;
  }
</style>