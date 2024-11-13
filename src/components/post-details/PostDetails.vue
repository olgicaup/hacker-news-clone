<template>
    <div class="post-details">
      <h1>{{ post.title }}</h1>
      <h1>test</h1>
      <p>{{ post.text }}</p>
      <Comments :commentIds="post.kids" />
    </div>
  </template>
  
  <script>
import Comments from '../comments/Comments.vue';

  
  export default {
    components: { Comments },
    data() {
      return {
        post: {},
      };
    },
    async mounted() {
      const postId = this.$route.params.id;
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`);
      this.post = await response.json();
    },
  };
  </script>
  