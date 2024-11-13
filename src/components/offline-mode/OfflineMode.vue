<template>
    <div class="offline">
      <h2>You are offline</h2>
      <p>Some features may not be available.</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (!navigator.onLine) {
        alert("You are currently offline. The data shown is from the cache.");
      }
    },
  };
  </script>
  