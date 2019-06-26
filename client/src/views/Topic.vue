<template>
  <div class="">
    <post v-for="post in posts" :key="posts._id" :postData="post" />
  </div>
</template>

<script>
  export default {
    name: "Topic",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>