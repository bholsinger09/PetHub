<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="topic in topics" :key="topic._id">
        <h4 id="topic">{{topic.title}}
          <button class="btn btn-warning m-1" @click="setActiveTopic(topic._id)">open</button>

          <button v-if="open != topic._id" class="btn btn-success m-1" @click="open = topic._id">create
            post</button>
          <form v-else @submit.prevent="createPost">
            <input type="text" placeholder="Post title">
            <input type="text" placeholder="Post Description">
            <button class="btn btn-success" type="submit">Submit</button>
          </form>

        </h4>
        <post v-for="post in posts" :key="posts._id" :postData="post" />
      </div>
    </div>
  </div>
</template>

<script>
  import Post from "@/components/Post.vue"

  export default {
    name: "forum",
    props: ['topicData', 'postData'],
    data() {
      return {
        posties: true,
        open: '',
        newPost: {
          title: "",
          body: "",
          creator: '',
          topicId: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch("getAllTopics");

    },//mounted
    computed: {
      topics() {
        return this.$store.state.topics;
      },
      topic() {
        this.topicId = this.$store.state.topic._id
        return this.$store.state.activeTopic
      },
      posts() {
        return this.$store.state.posts
      },
      user() {
        this.creator = this.$store.state.user._id
        return this.$store.state.user
      }

    },//computed

    methods: {
      setActiveTopic(id) {
        this.$store.dispatch("setActiveTopic", id)
        this.$store.dispatch('getPosts', id)
      }
    }, //methods

    components: {
      Post
    }
  }//export default
</script>