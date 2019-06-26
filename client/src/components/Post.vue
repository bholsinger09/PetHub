<template>
  <div class="Post">
    <div class="card" v-for="post in posts" :key="posts._id" :postData="post">
      <div class="card-body">
        <h5 class="text-left">{{post.title}}</h5>
        <p class="text-left">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: ["postData"],
    data() {
      return {}
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    mounted() {

      //this.$store.dispatch('getPosts', this.activeTopic._id)
    },
    methods: {

    },
    components: {}
  }
</script>
<style scoped>
  .card {
    clear: both;
    margin: 2rem;
  }

  .card-body {}
</style>