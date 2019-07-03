<template>
  <div id="carousel-item container-fluid">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" id="search">
          <img src="../assets/carousel1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption">
            <h5>Find your best bud!</h5>
            <router-link to="/results">
              <button class="btn btn-success mb-2">Find Your Pet!</button>
            </router-link>
          </div>
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

</style>