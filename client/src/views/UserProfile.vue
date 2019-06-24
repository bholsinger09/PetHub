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
          <p>Name:{{user.name}} <form @submit.prevent="editName" class="">
              <button class="" type="submit"><i class="fas fa-edit"></i></button></form>
          </p>
          <p>Pic: <img src="User.pic" alt="">
            <form @submit.prevent="editPic" class="">
              <button class="" type="submit"><i class="fas fa-edit"></i></button>
          </p>
          <p>Email:{{user.email}} <form @submit.prevent="editEmail" class="">
              <button class="" type="submit"><i class="fas fa-edit"></i></button></p>
          <p>Location:{{user.zip}} <form @submit.prevent="editZip" class="">
              <button class="" type="submit"><i class="fas fa-edit"></i></button></p>
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
        newName: {
          _id: this._id,
          name: ''
        },
        newPic: {
          _id: this._id,
          pic: ''
        },
        newEmail: {
          _id: this._id,
          email: ''
        },
        newZip: {
          _id: this._id,
          zip: ''
        },
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
      editEmail() {
        this.$store.dispatch('updateUser', this.newEmail)
      },
      editPic() {
        this.$store.dispatch('updateUser', this.newPic)
      },
      editName() {
        this.$store.dispatch('updateUser', this.newName)
      },
      editZip() {
        this.$store.dispatch('updateUser', this.newZip)
      },
    } //methods

  }

</script>

<style>

</style>