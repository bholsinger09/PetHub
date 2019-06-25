<template>
  <div class="Post">
    <div class="card">
      <div class="card-body">
        {{post.title}}
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
      topic() {
        return this.$store.state.activeTopic
      },
      posts() {
        return this.$store.state.posts
      }
    },
    mounted() {
      debugger
      // this.$store.dispatch('getPosts', this.activeTopic._id)
    },
    methods: {

    },
    components: {}
  }
</script>