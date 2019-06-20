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
          <img src="../assets/carousel1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" id="meetup">
          <img src="../assets/carousel2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" id="forum">
          <img src="../assets/carousel3.jpg" class="d-block w-100" alt="...">
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

    <!-- <form @submit.prevent="petSearch" class="searchForm">
      <i class="fas fa-cat"></i> <i class="fas fa-dog"></i>
      <input type="text" v-model="searchParams.dogOrCat" placeholder="dog or cat">
      <input type="text" v-model="searchParams.breed" placeholder="breed">
      <input type="text" v-model="searchParams.age" placeholder="age">
      <input type="text" v-model="searchParams.size" placeholder="size">
      <input type="text" v-model="searchParams.gender" placeholder="gender">
      <input type="text" v-model="searchParams.location" placeholder="postal code">


      <button type="submit">Find</button>
    </form> -->

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

    }
  }
</script>

<style>
  img {
    /* max-height: 50vh; */
  }
</style>