<template>
  <div>
    <!-- <div class="card" v-for="favorite in userFavorites" :key="userFavorites._id"> -->



    <ul class="list-group" v-for='favorite in userFavorites' :key="userFavorites._id">
      <li class="list-group-item">
        <h3>{{favorite.name}}</h3>
        <p>{{favorite.description}}</p>
        <router-link to="/profile">
          <i class="fas fa-info-circle" @click="gotoPet(favorite._id)"></i>
        </router-link>
        <i class="fas fa-trash-alt"></i>
      </li>

      {{favorite}}




    </ul>

  </div>
</template>

<script>
  export default {
    name: "favorites",
    data() {
      return {}
    },

    computed: {
      userFavorites() {
<<<<<<< HEAD
        let user = this.$store.state.user;
        return user.favorites
      },

    },
    methods: {
      goToPet(id) {
        debugger
        this.$store.dispatch("getPetById", id)
      },
=======
        return this.$store.state.user.favorites;
      }
>>>>>>> d73d4ef11ea2ec13b7db2f195d20489d49ed7ad6
    }
  }
</script>

<style>
  .petStories {}

  .petStories img {
    max-width: 200;
  }

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