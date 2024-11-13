<template>
  <div class="app-layout">
    <Navbar @search="updateSearchQuery" />

    <div class="content-area">
      <Sidebar />
      <main class="main-content">
        <PostList  v-if="!selectedPost" @view-comments="viewComments" :searchQuery="searchQuery"/>
        <Comments v-else :post="selectedPost" @back="goBackToPosts" />
      </main>

    </div>
  </div>
</template>

<script>
import Comments from "./components/comments/Comments.vue";
import Navbar from "./components/nav-bar/Navbar.vue";
import PostList from "./components/post-list/PostList.vue";
import Sidebar from "./components/side-bar/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    PostList,
    Comments,
  },
  data() {
    return {
      selectedPost: null, 
      searchQuery: "",
    };
  },
  methods: {
    viewComments(post) {
      this.selectedPost = post;
      console.log(post.objectIDs,'postid')
    },
    goBackToPosts() {
      this.selectedPost = null;
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
    },
  },
};
</script>


<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: whitesmoke;
}

nav {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: orange;
  color: white;
  font-weight: bold;
}

nav input {
  margin-left: auto;
  padding: 5px;
  font-size: 14px;
  border: 1px solid whitesmoke;
  border-radius: 5px;
}

.app-layout > .content-area {
  display: flex;
  flex: 1; 
  overflow: hidden;
}

.content-area .sidebar {
  width: 140px;
  background-color: white;
  border-right: 1px solid whitesmoke;
  overflow-y: auto;
}

.main-content {
  flex: 1; 
  padding: 20px;
  overflow-y: auto;
  background-color: white;
}
</style>
