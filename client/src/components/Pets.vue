<template>
  <div id="pets-results">

    <form @submit.prevent="petSearch" class="searchForm container-fluid">
      <div class="row">

        <!-- <input type="text" v-model="searchParams.type" placeholder="dog or cat"> -->
        <div class=" col-md-2 col-sm-6" id='type'>
          <h6>Animal:
            <input type="radio" class="hidden" id="dog" value="Dog" v-model="searchParams.type">
            <label for="Dog"><i class="fas fa-dog fa-lg" @click="activeDog = !activeDog"
                :class="{selected: activeDog}"></i></label>
            <input type="radio" class="hidden" id="cat" value="Cat" v-model="searchParams.type">
            <label for="cat"><i class="fas fa-cat fa-lg" @click="activeCat = !activeCat"
                :class="{selected: activeCat}"></i></label>
          </h6>
        </div>


        <!-- <input type="text" v-model="searchParams.age" placeholder="age"> -->
        <div class=" col-md-3  col-sm-6" id='age'>
          <!-- <p>{{searchParams.age}}</p> -->
          <h6>Age: <input type="checkbox" class="hidden" id="Baby" value="Baby" v-model="searchParams.age">
            <label for="Baby" @click="activeBaby = !activeBaby" :class="{selected: activeBaby}">Baby</label>
            <input type="checkbox" class="hidden" id="Young" value="Young" v-model="searchParams.age">
            <label for="Young" @click="activeYoung = !activeYoung" :class="{selected: activeYoung}">Young</label>
            <input type="checkbox" class="hidden" id="Adult" value="Adult" v-model="searchParams.age">
            <label for="Adult" @click="activeAdult = !activeAdult" :class="{selected: activeAdult}">Adult</label>
            <input type="checkbox" class="hidden" id="Senior" value="Senior" v-model="searchParams.age">
            <label for="Senior" @click="activeSenior = !activeSenior" :class="{selected: activeSenior}">Senior</label>
          </h6>
        </div>

        <!-- <input type="text" v-model="searchParams.gender" placeholder="gender"> -->
        <div class="col-md-2 col-sm-6 text-left" id='gender'>
          <h6>Gender: <input type="checkbox" class="hidden" id="male" value="male" v-model="searchParams.gender">
            <label for="male"><i class="fas fa-mars" @click="activeMars = !activeMars" :class="{selected: activeMars}">
              </i>
            </label>
            <input type="checkbox" class="hidden" id="female" value="female" v-model="searchParams.gender">
            <label for="female"> <i class="fas fa-venus" @click="activeVenus = !activeVenus"
                :class="{selected: activeVenus}"></i>
            </label></h6>
        </div>
      </div>

      <!-- <input type="text" v-model="searchParams.size" placeholder="size"> -->
      <div class="row d-flex justify-content-left">
        <div class="col-3 col-md-3 col-sm-4 text-left" id='size'>
          <input type="checkbox" class="hidden" id="small" value="small" v-model="searchParams.size">
          <label for="small">
            Size: <i class="fas fa-cat fa-xs" @click="activeSmall = !activeSmall" :class="{selected: activeSmall}"></i>
          </label>
          <input type="checkbox" class="hidden" id="medium" value="medium" v-model="searchParams.size">
          <label for="medium">
            <i class="fas fa-dog fa-sm" @click="activeMedium = !activeMedium" :class="{selected: activeMedium}"></i>
          </label>
          <input type="checkbox" class="hidden" id="large" value="large" v-model="searchParams.size">
          <label for="large">
            <i class="fas fa-cat fa-lg" @click="activeLarge = !activeLarge" :class="{selected: activeLarge}"></i>
          </label>
          <input type="checkbox" class="hidden" id="xlarge" value="xlarge" v-model="searchParams.size">
          <label for="xlarge">
            <i class="fas fa-dog fa-2x" @click="activeXLarge = !activeXLarge" :class="{selected: activeXLarge}"></i>

          </label>
        </div>
        <input class="col-1" type="text" v-model="searchParams.breed" placeholder="breed">
        <input class="col-1 ml-1" type="text" v-model="searchParams.location" placeholder="ZIP" width="15">
        <button class=" btn-sm btn-success ml-1" type="submit">Search</button>
      </div>
    </form>
    <form action.prevent="saveSearch()">
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <button @click="saveSearch()" class="input-group-text"><i class="fas fa-bookmark"></i></button>
        </div>
        <input type="text" v-model="searchParams.searchName" class="form-control" placeholder="Search Name" required>
      </div>
    </form>

    <div class="container-fluid w90">
      <div class="searchCard row">
        <div class="card col-12 col-sm-6 col-md-3 d-flex justify-content-between align-items-center" v-for="pet in pets"
          :value="pet.id" style="border-radius: 10px; margin-top: 20px;">
          <img class="card-img-top mt-2" :src="getPicture(pet.photos)"
            :height="$mq | mq({xs: '250px', sm: '200px', md: '200px', lg: '250px'})" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{pet.name}}</h5>
            <p class="card-text"> {{pet.breeds.primary}}</p>
            {{pet.photos.small}}

            <button class="btn btn-primary m-2" @click="goToPet(pet.id)">View Pet</button>
            <!-- 
            <button class="btn btn-primary m-2" @click="favoritePet()" v-model="petMod">Favorite <i
                class="fa fa-fw fa-heart" :class="{'text-danger': favorited}"></i></button> -->

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
        activeSenior: false,
        activeSmall: false,
        activeMedium: false,
        activeLarge: false,
        activeXLarge: false,
        activeMars: false,
        activeVenus: false,
        searchParams: {
          type: "",
          breed: [],
          age: [],
          size: [],
          gender: [],
          location: "",
          searchName: "",
          userId: "",
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
      // favoritePet() {
      //   if (!this.user._id) {
      //     this.$store.commit("setRedirect", this.$route)
      //     this.$router.push({ name: "login" })
      //     return
      //   }
      //   if (this.favorited) {
      //     this.user.favorites.splice(this.user.favorites.findIndex(p => p.id == this.pet.id), 1)
      //   } else {
      //     this.user.favorites.push(pet)
      //   }
      //   this.$store.dispatch('updateUser', this.user)

      // },
      saveSearch() {
        if (!this.user._id) {
          this.$store.commit("setRedirect", this.$route)
          this.$router.push({ name: "login" })
          return
        }
        debugger
        // this.user.searches.push(this.searchParams)
        this.$store.dispatch('saveSearch', this.searchParams)
      }
    },
    computed: {
      pets() {
        return this.$store.state.pets;
      },
      user() {
        this.searchParams.userId = this.$store.state.user._id || ''
        return this.$store.state.user;
      },
      favorited() {
        return this.$store.state.user.favorites.find(p => p.id == pet.id)
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

  .w90 {
    width: 90% !important;
  }
</style>