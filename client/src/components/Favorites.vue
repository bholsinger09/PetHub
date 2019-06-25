<template>
  <div>
    <!-- <div class="card" v-for="favorite in userFavorites" :key="userFavorites._id"> -->



    <ul class="list-group" v-for='favorite in userFavorites' :key="userFavorites._id">
      <li class="list-group-item">
        <!-- <p v-if="pet.type==cat"><i class="fas fa-cat"></i></p> -->
        <!-- <p v-if="pet.type==dog"><i class="fas fa-dog"></i></p> -->
        <!--<i v-if="pet.type==dog" class="fas fa-dog"></i> -->
        <h3>{{favorite.name}}</h3>
        <p>{{favorite.description}}</p>
        <!-- <router-link to="/petprofile"> -->
        <i class="fas fa-info-circle fa-lg" @click="goToPet(favorite.id)"></i>
        <!-- </router-link> -->
        <i class="fas fa-trash-alt fa-lgfa-flip-horizontal" @click="removePet(favorite.id)"></i>
      </li>

      {{favorite}}
      <!-- <div class="row" v-for='favorite in userFavorites' :key="userFavorites._id">
  <div class="col-1"><i v-if="pet.type==dog" class="fas fa-dog"></i><i v-if="pet.type==cat" class="fas fa-cat"></i></div>
  <div class="col-8 offset-1"><h3>{{favorite.name}}</h3><h3 v-if="favorite.breeds.secondary">{{favorite.breeds.primary}}/{{favorite.breeds.secondary}}</h3><h3 v-else>{{favorite.breeds.primary}}</h3></div>
  <i class="fas fa-mars" v-if="favorite.gender==male"></i> <i class="fas fa-venus" v-if="favorite.gender==female"></i>
  <div class="col-2"><i class="fas fa-info-circle fa-lg" @click="goToPet(favorite.id)"></i><i class="fas fa-trash-alt fa-lgfa-flip-horizontal" @click="removePet(favorite.id)"></i></div>
  <div class="col-12"><p>{{favorite.description}}</p></div>
</div> -->



    </ul>

  </div>
</template>

<script>
  export default {
    name: "favorites",
    data() {
      return {}
    }, //data

    computed: {
      userFavorites() {
        let user = this.$store.state.user;
        return user.favorites
      },

    }, //computed
    methods: {
      goToPet(id) {
        debugger
        this.$store.dispatch("getPetById", id)
      },
      removePet(id) {
        this.$store.dispatch('removePet', id)
      }
    } //methods
  }
</script>

<style>
  /* .petStories {}

  .petStories img {
    max-width: 200;
  } */

  .container {
    position: relative;
    width: 50%;
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #ffff379b;
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: #750000;
    text-shadow: #d48b36;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>