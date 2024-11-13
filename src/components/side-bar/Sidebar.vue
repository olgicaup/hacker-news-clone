<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/all">All</router-link></li>
        <li><router-link to="/">Hot</router-link></li>
        <li><router-link to="/show">Show HN</router-link></li>
        <li><router-link to="/ask">Ask HN</router-link></li>
        <li><router-link to="/polls">Polls</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
        <li><router-link to="/offline">Offline</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  padding: 20px 0;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar nav ul li {
  margin: 0;
}

.sidebar nav ul li a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.sidebar nav ul li a.router-link-exact-active {
  background-color: lightgrey;
}
</style>
