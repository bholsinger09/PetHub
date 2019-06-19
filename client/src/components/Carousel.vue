<template>
  <div id="carousel-item">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" id="search">
          <img src="../assets/searchimg.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" id="meetup">
          <img src="../assets/meetupimgcrop3.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" id="forum">
          <img src="../assets/forumimg.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <form @submit.prevent="petSearch" class="searchForm" action="">
      <i class="fas fa-cat"></i> <i class="fas fa-dog"></i>
      <input type="text" v-model="query">

      <h5><i class="fas fa-cat">S</i></h5>
      <h4><i class="fas fa-dog">M</i></h4>
      <h3><i class="fas fa-cat">L</i></h3>
      <h2><i class="fas fa-dog">XL</i></h2>

      Age: whelp, young,
      Breed Dropdown
      <button type="submit">Find</button>
    </form>

  </div>
</template>

<script>
  export default {
    name: "carousel",
    data() {
      return {

      }
    },
    methods: {
      petSearch() {
        this.$store.dispatch('petSearch')
      }
    }
  }
</script>

<style>
  img {
    /* max-height: 50vh; */
  }
</style>