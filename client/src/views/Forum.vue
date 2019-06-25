<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 v-for="topic in topics" :key="topic._id">{{topic.title}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forum",
    props: [],
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