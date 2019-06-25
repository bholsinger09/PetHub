<template>
  <div class="container w90">
    <div class="row">
      <div class="col-12" v-for="topic in topics" :key="topic._id">
        <h4 id="topic">{{topic.title}}</h4>
        <post />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forum",
    props: [
      'topicId'
    ],
    data() {
      return {}
    },
    mounted() {
      debugger
      this.$store.dispatch("getAllTopics")
    },
    computed: {
      topics() {
        return this.$store.state.topics;
      }
    },
    methods: {},
    components: {}
  }
</script>

<style>
  #topic {
    background-color: rgba(0, 0, 0, 0.4);
    margin-top: 10px;
  }
</style>