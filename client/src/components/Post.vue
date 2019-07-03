<template>
  <div class="Post">
    <div class="card" v-for="post in posts" :key="posts._id" :postData="post">
      <div class="card-body">
        <h5 class="text-left">{{post.title}}</h5>
        <p class="text-left">{{post.body}}</p>
        <p class="text-left" v-for="comment in post.comments" :key="comment._id">{{comment.description}}</p>
      </div>
      <div class="row">
        <div class="col-2">
          <button class="btn-sm btn-success" @click="">View Comments</button>
        </div>
        <div class="col-2">
          <button class="btn-sm btn-success" @click="addComment=true" v-if="!addComment">Add Comment</button>
        </div>
        <form @submit.prevent="submitComment">
          <textarea v-model="newComment.description"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: ["postData"],
    data() {
      return {
        addComment: false,
        newComment: {
          description: "",
        },
      }
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    mounted() {

      //this.$store.dispatch('getPosts', this.activeTopic._id)
    },
    methods: {
      submitComment() {
        debugger //Stopped here looking for _id Issue
        let comment = { ...this.newComment, postId: this.post._id };
        this.post.comments.push(comment);
        this.$store.dispatch('updatePost', this.post)
      }
    },
    components: {}
  }
</script>
<style scoped>
  .card {
    clear: both;
    margin: 2rem;
  }

  .card-body {}
</style>