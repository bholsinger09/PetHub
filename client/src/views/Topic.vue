<template>
  <div class="Topic container-fluid">
    <div class="row">
      <div class="col-12">
        <h4>{{topic.title}}</h4>
      </div>
      <div class="col-12">
        <form @submit.prevent="createPost">
          <input type="text" name="title" placeholder="Enter Title" v-model="newPost.title" size="65"><br />
          <textarea type="text" name="body" placeholder="Enter Post" v-model="newPost.body" cols="65"></textarea><br />
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div class="col-12 ">
        <post />
      </div>
    </div>
  </div>
</template>

<script>
  import Post from '@/components/Post.vue'
  export default {
    name: "Topic",
    props: [],
    data() {
      return {
        newPost: {
          topicId: this.$route.params.id,
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
      },
      topicId() {
        return this.$route.params.id // this will persist through page refresh while props won't
      }
    },
    mounted() {
      if (!this.topic._id) {
        this.$store.dispatch("getTopic", this.topicId)
      }
      this.$store.dispatch('getPosts', this.topicId)
    },
    methods: {
      createPost() {
        this.$store.dispatch('createPost', this.newPost)
      },
    },
    components: {
      Post
    }
  }
</script>
<style>
  .w90 {
    width: 90%;
  }

  input {
    margin-bottom: 10px;
  }
</style>