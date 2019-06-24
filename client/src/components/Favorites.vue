<template>
  <div>
    <h1>all the favorites</h1>
    <div class="card" v-for="favorite in favorites" :key="user.favorites._id">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "favorites",
    data() {
      return {}
    },

    computed: {
      user() {
        return this.$store.state.user;
      }
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