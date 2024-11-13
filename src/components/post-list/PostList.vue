<template>
  <div class="posts-container">
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="posts.length">
      <li v-for="post in filteredPosts" :key="post.objectID">
        <section class="wrapper">
          <div class="upper">
            <h3 class="title">{{ post.title }}</h3>
            <a class="url" :href="post.url" target="_blank">({{ post.url }})</a>
          </div>
          <div class="down">
            <span class="points">Points: {{ post.points }}</span>
            |
            <span class="author">{{ post.author }}</span>
            |
            <span class="created_at">{{ post.created_at }}</span>
            |

            <a href="#" @click.prevent="$emit('view-comments', post)">
              Comments: {{ post.num_comments }}
            </a>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      loading: false,
      error: null,
    };
  },
  props: {
    searchQuery: String
  },
  computed: {
    filteredPosts() {
      if (!this.searchQuery) return this.posts;
      const lowerQuery = this.searchQuery.toLowerCase();
      return this.posts.filter(
        (post) =>
          (post.title && post.title.toLowerCase().includes(lowerQuery)) ||
          (post.url && post.url.toLowerCase().includes(lowerQuery)) ||
          (post.author && post.author.toLowerCase().includes(lowerQuery))
      );
    }
  },
  methods: {
    async fetchPostDetails(post) {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/items/${post.objectID}`
        );
        const num_comments = response.data.children
          ? response.data.children.length
          : 0;
        return { ...response.data, num_comments };
      } catch (err) {
        console.error("Failed to fetch post details:", err);
        return null;
      }
    },

    async fetchPosts() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search_by_date?tags=story"
        );
        
        const postsWithDetails = await Promise.all(
          response.data.hits.map(async (post) => {
            const postDetails = await this.fetchPostDetails(post);
            return {
              ...post,
              num_comments: postDetails ? postDetails.num_comments : 0,
            };
          })
        );
        this.posts = postsWithDetails;
      } catch (err) {
        this.error = "Failed to load posts.";
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>


<style scoped>
h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.points {
  font-size: 13px;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.upper {
  display: flex;
  align-items: center;
  gap: 20px;
}
.url {
  font-size: 14px;
  margin-left: 20px;
  margin-top: 10px;
}
.down {
  display: flex;
  gap: 10px;
  align-items: center;
}
.author {
  color: blue;
}
.created_at {
  font-size: 12px;
  margin-top: 5px;
}
</style>
