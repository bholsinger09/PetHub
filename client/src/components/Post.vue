<template>
  <div class="Post">
    <div class="card" v-for="post in posts" :key="posts._id" :postData="post">
      <div class="card-body">
        <h5 class="text-left">{{post.title}}</h5>
        <p class="text-left">{{post.body}}</p>
        <button class="btn btn-warning" @click="deletePost(post)" v-show="user.name">Delete Post</button>
        <H6 class="text-left ">Comment</H6>
        <p class="text-left" v-for="comment in post.comments" :key="comment._id">{{comment.description}} -
          {{comment.name}} <button @click="deleteComment(post, comment._id)"
            class="btn btn-warning rounded-circle">X</button>
        </p>

      </div>
      <div class="row d-flex justify-content-center">
        <div class="col" v-show="user.name">
          <form @submit.prevent="submitComment(post)">
            <textarea v-model="newComment.description" placeholder="Body" class="w-98"></textarea>
            <br />
            <input type="text" v-model="newComment.name" name="creator" placeholder="Creator"><br />
            <button type="submit" class="mb-4 btn-sm btn-success">Add Comment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    data() {
      return {
        addComment: false,
        newComment: {
          description: "",
          name: "",
        },
      }
    },
    computed: {
      posts() {
        return this.$store.state.posts
      },
      user() {
        return this.$store.state.user
      }
    },
    mounted() {

      //this.$store.dispatch('getPosts', this.activeTopic._id)
    },
    methods: {
      submitComment(post) {
        let comment = { ...this.newComment };
        post.comments.push(comment);
        this.$store.dispatch('updatePost', post)
      },
      deleteComment(post, id) {
        let index = post.comments.findIndex(c => c._id == id);
        post.comments.splice(index, 1);
        this.$store.dispatch('updatePost', post)
      },
      deletePost(post) {
        this.$store.dispatch('deletePost', post)
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
</style>