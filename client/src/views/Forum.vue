<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="topic in topics" :key="topic._id">
        <router-link :to="{name:'topic', params:{topicId:topic._id}}">
          <h4 id="topic" @click="setActiveTopic(topicId)">{{topic.title}}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from "@/components/Post.vue"

  export default {
    name: "forum",
    props: ['topicId', 'postData'],
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
      setActiveTopic(topicId) {
        debugger
        this.$store.dispatch("setActiveTopic", topicId)
      }
    }, //methods

    components: {
      Post
    }
  }//export default
</script>

<Style>

</Style>