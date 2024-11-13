<template>
    <input
      type="text"
      v-model="query"
      placeholder="Search posts"
      @input="onSearch"
    />
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      async onSearch() {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${this.query}`);
        const data = await response.json();
        this.$emit('search', data.hits);
      },
    },
  };
  </script>
  