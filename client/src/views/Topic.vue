<template>
  <div class="Topic">
    <!-- </router-link> -->
    <h4>{{topic.title}}</h4>
    <post v-for="post in posts" :key="posts._id" :postData="post" />
    <form @submit.prevent="createPost">
      <input type="text" name="title" placeholder="Enter Title" v-model="newPost.title">
      <textarea type="text" name="body" placeholder="Enter Post" v-model="newPost.body"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Topic",
    props: ['topicId'],
    data() {
      return {
        newPost: {
          topicId: this.topicId,
          title: "",
          body: ""
        }
      }
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
      this.$store.dispatch('getTopic', this.$route.params.id)
      // this.$store.dispatch('getPosts', this.topicId)
    },
    methods: {
      createPost() {
        debugger
        this.$store.dispatch('createPost', this.newPost)
      },
    },
    components: {
      // Post
    }
  }
</script>