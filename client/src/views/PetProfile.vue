<template>
  <div>
    </router-link>
    <div class="col-6 col-sm-12">
      <img class="petFull" src="pet.photos.full" alt="Card image cap">
    </div>
    <div class="col-6 col-sm-12">
      <h2 v-if="pet.adoptable==false" style="color: #750000">This good boy/girl has found a home.</h2>
      <h2 class="card-title">{{pet.name}}</h2>
      <p class="card-text">{{pet.description}}</p>
    </div>
    <!-- set2 -->
    <div class="col-6 col-sm-12">
      <p class="card-text">Age:{{pet.age}} Sex:{{pet.gender}} Size:{{pet.size}}</p>
      <p v-if="!pet.breeds.unknown">Breed: {{pet.breeds.primary}} {{pet.breeds.secondary}} {{pet.breeds.mixed}} </p>
    </div>
    <div class="col-6 col-sm-12">
      <h2>Medical</h2>
      <!-- all attributes are boolean -->
      <p v-if="pet.gender=male">Neutered: <p> {{pet.attributes.spayed_neutered}} </p>
      </p>
      <p v-if="pet.gender=female">Spayed: <p> {{pet.attributes.spayed_neutered}} </p>
      </p>
      <p v-if="pet.breed=cat">Declawed: {{pet.attributes.declawed}} </p>
      <p>House Trained: {{pet.attributes.house_trained}}</p>
      <p>Special Needs: {{pet.attributes.special_needs}}</p>
      <p>Shots Current: {{pet.attributes.shots_current}}</p>
      <!-- environment is boolean -->
      <p v-if="pet.environment.children || pet.environment.children || pet.environment.dogs">Good With:
        {{pet.environemnt.children}} {{pet.environment.cats}} {{pet.environment.dogs}}</p>
      <p v-else>A home without children or other pets. </p>
    </div>
    <!-- set3 -->
    <div class="col-12">
      <!-- Contact -->
      <p>{{contact.email}} | {{contact.phone}}</p>
      <p>{{contact.address.address1}} {{contact.address.address2}} {{contact.address.city}},
        {{contact.address.state}} {{contact.address.postcode}} {{contact.address.country}}</p>
    </div>
    <a href="#" class="btn btn-primary">Favorite</a>
  </div>

</template>

<script>
  export default {
    name: "petprofile",
    data() {
      return {}
    }
  }
</script>

<style>
</style>