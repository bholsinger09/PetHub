<template>
  <div class="Post">
    <div class="card" v-for="post in posts" :key="posts._id" :postData="post">
      <div class="card-body">
        <h5 class="text-left">{{post.title}}</h5>
        <p class="text-left">{{post.body}}</p>
        <H6 class="text-left ">Comment</H6>
        <p class="text-left" v-for="comment in post.comments" :key="comment._id">{{comment.description}} -
          {{comment.creator}}</p>
      </div>
      <div class="row d-flex justify-content-center">
        <!-- <div class="col-2">
          <button class="btn-sm btn-success" @click="">View Comments</button>
        </div>
        <div class="col-2">
          <button class="btn-sm btn-success" @click="addComment=true" v-if="!addComment">Add Comment</button>
        </div> -->
        <form @submit.prevent="submitComment(post)">
          <textarea v-model="newComment.description" cols="65" placeholder="Comment Body"></textarea>
          <br />
          <input type="text" name="creator" size="65" placeholder="Creator: Enter Name Here"><br />
          <button type="submit">Add Comment</button>
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
      submitComment(post) {
        debugger //Stopped here looking for _id Issue
        let comment = { ...this.newComment };
        post.comments.push(comment);
        this.$store.dispatch('updatePost', post)
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