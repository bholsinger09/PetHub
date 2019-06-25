<template>
  <div class="Post">
    <div class="card" v-for="post in posts" :key="post._id">
      <div class="card-body">
        This is some text within a card body.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>