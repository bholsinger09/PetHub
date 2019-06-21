<template>
  <div class="row" v-if="pet.id">
    <div class="col-12 col-sm-6">
      </router-link>
      <img class="card-img-top " :src="getPicture(pet.photos)" alt="Card image cap"
        :height="$mq | mq({xs: '350px', sm: '400px', md: '450px', lg: '500px'})" style="padding: 10px" />
    </div>

    <div class="col-12 col-sm-6 text-left" style="padding: 30px;">
      <!-- <h2 v-if="pet.adoptable==false" style="color: #750000">This good boy/girl has found a home.</h2> -->
      <h2 class="card-title">{{pet.name}}</h2>
      <p class="card-text">Description: {{pet.description}}</p>
      <p class="card-text">Age: {{pet.age}}</p>
      <p class="card-text">Status: {{pet.status}}</p>
      <p class="card-text">Primary Breed: {{pet.breeds.primary}}</p>
      <p class="card-text" v-if="pet.breeds.secondary">Secondary Breed: {{pet.breeds.secondary}}</p>
      <p class="card-text">Type: {{pet.type}}</p>
      <p class="card-text" v-if="pet.type === 'Cat'">Declawed: {{pet.attributes.declawed}}
        <p class="card-text" v-if="pet.attributes.spayed_neutered == true">Spayed/Neutered: <i class="fas fa-check"></i>
        </p>
        <p class="card-text" v-if="pet.attributes.spayed_neutered == false">Spayed/Neutered: <i class="fas fa-ban"></i>
        </p>
        <p class="card-text" v-if="pet.attributes.house_trained == true">House Trained: <i class="fas fa-check"></i></p>
        <p class="card-text" v-if="pet.attributes.house_trained == false">House Trained: <i class="fas fa-ban"></i></p>
        <p class="card-text">Good With: {{pet.attributes.environment}}</p>
        <p class="card-text">Phone: {{pet.contact.phone}}</p>
        <p class="card-text">Email: {{pet.contact.email}}</p>
        <p class="card-text">Location: {{pet.contact.address.city}}, {{pet.contact.address.state}}</p>
        <p class="card-text" v-if="!pet.tags === []">Tags: {{pet.tags}}</p>
        <!-- <div v-if="pet.gender==female">Spayed: <p> {{pet.attributes.spayed_neutered}} </p> -->
        <!-- </div> -->
    </div>
    <!-- set2 -->
    <!-- <div class="col-6 col-sm-12">
      <p class="card-text">Age:{{pet.age}} Sex:{{pet.gender}} Size:{{pet.size}}</p>
      <p v-if="!pet.breeds.unknown">Breed: {{pet.breeds.primary}} {{pet.breeds.secondary}} {{pet.breeds.mixed}} </p>
    </div>
    <div class="col-6 col-sm-12">
      <h2>Medical</h2> -->
    <!-- all attributes are boolean -->
    <!-- <p v-if="pet.gender==male">Neutered: <p> {{pet.attributes.spayed_neutered}} </p>
      </p>
      <p v-if="pet.gender==female">Spayed: <p> {{pet.attributes.spayed_neutered}} </p>
      </p>
      <p v-if="pet.breed=cat">Declawed: {{pet.attributes.declawed}} </p>
      <p>House Trained: {{pet.attributes.house_trained}}</p>
      <p>Special Needs: {{pet.attributes.special_needs}}</p>
      <p>Shots Current: {{pet.attributes.shots_current}}</p> -->
    <!-- environment is boolean -->
    <!-- <p v-if="pet.environment.children || pet.environment.children || pet.environment.dogs">Good With:
        {{pet.environment.children}} {{pet.environment.cats}} {{pet.environment.dogs}}</p>
      <p v-else>A home without children or other pets. </p>
    </div> -->
    <!-- set3 -->
    <!-- <div class="col-12"> -->
    <!-- Contact -->
    <!-- <p>{{contact.email}} | {{contact.phone}}</p>
      <p>{{contact.address.address1}} {{contact.address.address2}} {{contact.address.city}},
        {{contact.address.state}} {{contact.address.postcode}} {{contact.address.country}}</p>
    </div>
    <a href="#" class="btn btn-primary">Favorite</a> -->
  </div>
  <div v-else>LOADING...</div>
</template>

<script>
  import defaultImg from '@/assets/dogcat.png'

  export default {
    name: "petprofile",
    data() {
      return {
        //pet: {}
      }
    },
    mounted() {
      // debugger
      this.$store.dispatch('getPetById', this.$route.params.id)
      console.log(this.pet)

    },
    computed: {
      pet() {
        return this.$store.state.pet;
      }
    },
    methods: {
      getPicture(photos) {
        if (!photos.length) { return defaultImg }
        return photos[0].large
      }
    }
  }
</script>

<style>
</style>