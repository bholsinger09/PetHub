<template>
  <div>
    <div class="row" v-for='search in userSearches' :key="userSearches.searchName">
      <div class="col-9">
        <h3>{{search.searchName}}</h3>
      </div>
      <div class="col-3">
        <h4> <i class="fas fa-search"></i> | <i class="fas fa-trash-alt fa-lgfa-flip-horizontal"
            @click="removeSearch(search._id)"></i></h4>
      </div>
      <div class="col-6">
        <h4>Type</h4>
        <h4 v-if="search.type=='Cat'"><i class="fas fa-cat"></i></h4>
        <h4 v-else-if="search.type=='Dog'"><i class="fas fa-dog"></i></h4>
      </div>
      <div class="col-6">
        <h4>Age:</h4>
        <p>{{search.age}}</p>
      </div>
      <div class="col-6">
        <h4>Gender:</h4>
        <p>{{search.gender}}</p>
      </div>
      <div class="col-6">
        <h4>Size:</h4>
        <p>{{search.size}}</p>
      </div>
      <div class="col-6">
        <h4>Breed:</h4>
        <p>{{search.breeds}}</p>
        <!-- <p v-if="search.breeds.secondary">{{search.breeds.secondary}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Searches",
    data() {
      return {}
    }, //data

    computed: {
      userSearches() {
        let user = this.$store.state.user;
        return user.searches
      },

    }, //computed
    methods: {
      //   goToSearch(id) { //unwritten
      //     debugger
      //     this.$store.dispatch("Search???", id)
      //   },
      removeSearch(id) { //unwritten
        this.$store.dispatch('removeSearch', id)
      }
    } //methods
  }
</script>
<style>
</style>