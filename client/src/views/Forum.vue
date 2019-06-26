<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="topic in topics" :key="topic._id">
        <h4 id="topic" @click="setActiveTopic(topic._id)">{{topic.title}}</h4>
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
        debugger
        this.$store.dispatch("setActiveTopic", id)
      }
    }, //methods

    components: {
      Post
    }
  }//export default
</script>

<Style>

</Style>