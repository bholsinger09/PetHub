<template>
  <div class="row" v-if="pet.id">
    <div class="col-12 col-sm-6">
      </router-link>
      <img class="card-img-top " :src="getPicture(pet.photos)" alt="Card image cap"
        :height="$mq | mq({xs: '350px', sm: '400px', md: '450px', lg: '500px'})" style="padding: 10px" />
      <hr>
      <div>
        <div v-if="user.name" @click="favoritePet()">
          FAVORITE PET <i class="fa fa-fw fa-heart" :class="{stylered: favoritedButton}"></i>
        </div>
        <!-- Pets are being favorited more than once; toggle doesnt work -->

        <div class="loginPrompt" v-else>
          Please login to favorite pet!
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 text-left" style="padding: 30px;">
      <h2 class="card-title">{{pet.name}}</h2>
      <p class="card-text">Description: {{pet.description}} <a :href="pet.url" target="_blank" class="text-muted">View
          Full Bio</a>
      </p>
      <p class="card-text">Age: {{pet.age}}</p>
      <p class="card-text" v-if="pet.status == 'adoptable'">Status: Adoptable</p>
      <p class="card-text" v-if="pet.status == 'adopted'">Status: Adopted</p> <!-- maybe should be red -->
      <p class="card-text" v-if="pet.status == 'found'">Status: Found</p>
      <p class="card-text">Primary Breed: {{pet.breeds.primary}}</p>
      <p class="card-text" v-if="pet.breeds.secondary">Secondary Breed: {{pet.breeds.secondary}}</p>
      <p class="card-text" v-if="pet.type === 'Cat'">Declawed: {{pet.attributes.declawed}}
        <p class="card-text" v-if="pet.attributes.spayed_neutered == true">Spayed/Neutered: <i class="fas fa-check"></i>
        </p>
        <p class="card-text" v-if="pet.attributes.spayed_neutered == false">Spayed/Neutered: <i class="fas fa-ban"></i>
        </p>
        <p class="card-text" v-if="pet.attributes.house_trained == true">House Trained: <i class="fas fa-check"></i></p>
        <p class="card-text" v-if="pet.attributes.house_trained == false">House Trained: <i class="fas fa-ban"></i></p>
        <p class="card-text">Phone: {{pet.contact.phone}}</p>
        <p class="card-text">Email: {{pet.contact.email}}</p>
        <p class="card-text">Location: {{pet.contact.address.city}}, {{pet.contact.address.state}}</p>
        <p class="card-text" v-if="!pet.tags === []">Tags: {{pet.tags}}</p>
        <span>Good With: </span>
        <span class="card-text" v-if="pet.environment.children ==true">• Children </span>
        <span v-if="pet.environment.dogs == true"> • Dogs</span>
        <span v-if="pet.environment.cats == true"> • Cats</span>

    </div>

  </div>
  <div v-else>LOADING...</div>
</template>

<script>
  import defaultImg from '@/assets/dogcat.png'

  export default {
    name: "petprofile",
    data() {
      return {
        favoritedButton: false,
        //pet: {}

      }
    },
    mounted() {

      this.$store.dispatch('getPetById', this.$route.params.id)
      setTimeout(() => {
        let user = this.$store.state.user
        if (user.name) {

          this.findFavoritePet(this.pet.id)
          return user
        } else {
          return false
        }
      }, 3000)




    },
    computed: {
      pet() {
        return this.$store.state.pet;
      },
      user() {
        return this.$store.state.user
        // let user = this.$store.state.user
        // if (user.name) {
        //   this.findFavoritePet(this.pet.id)
        //   return user
        // } else {
        //   return false
        // }
      },
      // favorited() {
      //   return this.$store.state.user.favorites.find(p => p.id == this.$route.params.id)
      // }

    },
    methods: {
      getPicture(photos) {
        if (!photos.length) { return defaultImg }
        return photos[0].large
      },
      favoritePet() {
        if (!this.user._id) {
          this.$store.commit("setRedirect", this.$route)
          this.$router.push({ name: "login" })
          return
        }
        let index = this.user.favorites.findIndex(p => p.id == this.pet.id)
        if (index > -1) {
          this.user.favorites.splice(index, 1)
          this.favoritedButton = false
          console.log(this.favoritedButton)
        } else {
          this.user.favorites.push(this.pet)
          this.favoritedButton = true
          console.log(this.favoritedButton)
        }
        this.$store.dispatch('updateUser', this.user)
        findFavoritePet(this.pet.id)
      },
      findFavoritePet(id) {

        let found = this.user.favorites.find(p => p.id == id)
        if (found) {
          this.favoritedButton = true

        } else {
          this.favoritedButton = false
        }
      }
    }
  }
</script>

<style scoped>
  .fa-check:before {
    color: rgb(40, 167, 69);
  }

  .fa-ban:before {
    color: red;
  }

  .loginPrompt {
    border: 1px solid rgba(0, 0, 0, 0.384);
  }

  .stylered {
    color: red;
  }
</style>