<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="topic in topics" :key="topic._id">
        <h4 id="topic">{{topic.title}}
          <button class="btn btn-warning" @click="setActiveTopic(topic._id)">open</button>
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
        // newPost: {
        //   title: "",
        //   topicId: this.topicData._id
        // }
      }
    },
    mounted() {
      this.$store.dispatch("getAllTopics");

    },//mounted
    computed: {
      topics() {
        return this.$store.state.topics;
      },

    },//computed

    methods: {
      setActiveTopic(id) {
        this.$store.dispatch("setActiveTopic", id)
      }
    }, //methods

    components: {
      Post
    }
  }//export default
</script>