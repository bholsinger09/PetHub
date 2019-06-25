<template>
  <div class="container w90">
    <div class="row">
      <div class="col-12" v-for="topic in topics" :key="topic._id">
        <h4 id="topic" @click="setActiveTopic(topic._id)">{{topic.title}}</h4>
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
        // newPost: {
        //   title: "",
        //   topicId: this.topicData._id
        // }
      }
    },
    mounted() {
      this.$store.dispatch("getAllTopics");
      debugger
      this.$store.dispatch("getPosts", topics._id)
    },
    computed: {
      topics() {
        return this.$store.state.topics;
      },
      posts() {
        return this.$store.state.posts;
      }

    },

    methods: {
      // setActiveTopic(id) {

    },
    components: {
      // Post
    }
  }
</script>

<style>
  #topic {
    background-color: rgba(0, 0, 0, 0.4);
    margin-top: 10px;
  }
</style>