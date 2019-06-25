<template>
  <div class="Post">
    <div class="card">
      <div class="card-body">
        {{postData.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: ["postData"],
    data() {
      return {}
    },
    computed: {

    },
    methods: {},
    components: {}
  }
</script>