<template>
  <header class="navbar">
    <div class="navbar-logo">
      <img src="../../assets/logo1.png" />
      <span>Search
        <br />
        Hacker News</span>
    </div>

    <div class="navbar-search">
      <input type="text" 
      v-model="searchInput" 
      placeholder="Search stories by title, url or author" 
      @input="$emit('search', searchInput)" />
    </div>

    <div class="navbar-links">
      <span class="navbar-item">algolia</span>
      <span class="navbar-item"><i class="fa fa-cog"></i></span>
    </div>
  </header>
</template>
  

  <script>
export default {
  name: "Navbar",
  data() {
    return {
      searchInput: ""
    };
  }
};

</script>
  
  <style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #e67300;
  color: black;
  border-bottom: 1px solid whitesmoke;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
}

.navbar-logo img {
  width: 70px;
  border-radius: 10px;
  height: 70px;
}

.navbar-search input {
  width: 900px;
  padding: 0.5rem;
  border: 1px solid whitesmoke;
  border-radius: 4px;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-item {
  cursor: pointer;
  font-size: 2rem;
  color: blue;
}

.navbar-item i {
  font-size: 1.2rem;
}
</style>
  