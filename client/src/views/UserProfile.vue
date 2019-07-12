<template>
  <div>
    <div class="container-fluid">

      <div class="row">
        <div class="col-6">
          <h1>Favorites: </h1>
          <Favorites></Favorites>

        </div>
        <div class="col-6">
          <h1>Searches</h1>
          <Searches></Searches>
          <!-- {{user.searches}} -->
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h1>Settings</h1>
          <div class="row">

            <div class="col-3">
              <p>Pic: <img src="User.pic" alt="">
                <form @submit.prevent="editPic" class=""><input type="text" v-model="newPic.pic" placeholder="Pic Link">
                  <button class="" type="submit"><i class="fas fa-edit"></i></button>
              </p>
              </form>
            </div><!-- col-6 pic-->
            <div class="col-3">
              <p>Name:{{user.name}} <form @submit.prevent="editName" class=""><input type="text" v-model="newName.name"
                    placeholder="Name">
                  <button class="" type="submit"><i class="fas fa-edit"></i></button></form>
              </p>
            </div><!-- col-6 name-->
            <div class="col-3">
              <p>Email:{{user.email}} <form @submit.prevent="editEmail" class=""><input type="email"
                    v-model="newEmail.Email" placeholder="E-mail">
                  <button class="" type="submit"><i class="fas fa-edit"></i></button></p>
              </form>
            </div><!-- col-6 email-->
            <div class="col-3">
              <p>Location:{{user.zip}} <form @submit.prevent="editZip" class=""><input type="number"
                    v-model="newZip.zip" placeholder="zip code">
                  <button class="" type="submit"><i class="fas fa-edit"></i></button></p>
              </form>
            </div> <!-- col-6 zip-->
          </div>
          <!--//row -->

        </div>
        <!--col-12 Settings -->
      </div>

    </div>
  </div>
</template>

<script>
  import Favorites from '@/components/Favorites.vue'
  import Searches from '@/components/Searches.vue'

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
    }, //Data
    computed: {
      user() {
        return this.$store.state.user;
      }
    }, //computed
    components: {
      Favorites,
      Searches
    }, //components
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