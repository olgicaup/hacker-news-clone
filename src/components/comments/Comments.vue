<template>
  <div>
    <button @click="$emit('back')">Back to Posts</button>
    <h2>{{ post.title }}</h2>
    <a :href="post.url" target="_blank">View Post</a>

    <h3>Comments</h3>
    <div v-if="loading">Loading comments...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="comments.length">
      <li v-for="comment in comments" :key="comment.id">
        <p v-html="comment.text"></p>
        <small>by {{ comment.author }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    post: Object,
  },
  data() {
    return {
      comments: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchComments() {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/items/${this.post.objectID}`
        );
        console.log(response.data);
        this.comments = response.data.children;
      } catch (err) {
        this.error = "Failed to load comments.";
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchComments();
  },
};
</script>


