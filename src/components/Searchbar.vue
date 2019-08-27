<template>
  <div class="header" :class="{'dark': darkMode}">
    <h1 class="title">Employee Status</h1>
    <div class="search-container">
      <input class="searchbar" v-model="searchText" type="text" placeholder="Search for a user" @input="searchUser()">
      <img class="search-icon" src="../assets/search.svg" alt="search">
    </div>
  </div>
</template>

<script>

export default {
  name: 'searchbar',
  props: {
    darkMode: Boolean
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    searchUser: function() {
      this.$emit('search-users', this.searchText);
    }
  }
}
</script>

<style scoped>
  .header {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .title {
    color: #2EB67D;
    font-size: 42px;
    flex: 0 1 auto;
  }
  .search-container {
    flex: 1 1 auto;
    text-align: right;
    min-width: 400px;
    position: relative;
  }
  .searchbar {
    border: 1px solid #CBCBCB;
    border-radius: 50px;
    padding: 10px 15px;
    font-size: 16px;
    width: 100%;
    max-width: 500px;
    background: none;
  }
  .header.dark .search-container .searchbar{
    border: 1px solid white;
    color: white;
  }
  .search-icon {
    position: absolute;
    right: 14px;
    width: 18px;
    top: 11px;
  }
</style>
