<template>
  <div>
    <div class="container-fluid">

      <div class="row">
        <h1>Favorites</h1>
        </Favorites>
        <div class="col-6"></div>
        <div class="col-6">
          <h1>Searches</h1>
          <!-- </Searches> -->
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h1>Settings</h1>
          <p>Name:{{user.name}} <form @submit.prevent="editUser" class="">
              <button class="" type="submit">Edit</button></form>
          </p>
          <p>Pic: <img src="User.pic" alt=""> <button @click="">Edit</button>
            <!--not connected-->
          </p>
          <p>email:{{user.email}} <button @click="editUser">Edit</button>
            <!--not connected-->
          </p>
          <p>Location:{{user.zip}} <button @click="editUser">Edit</button>
            <!--not connected-->
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Favorites from '@/components/Favorites.vue'
  // import Searches from '@/components/Searches.vue'

  export default {
    name: 'UserProfile',
    // props: ['User'],
    data() {
      return {

      }

    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    components: {
      Favorites
    },
    methods: {
      editUser() {
        console.log(this.searchParams)
        this.$store.dispatch('petSearch', this.searchParams)
      },
    }

  }

</script>

<style>

</style>