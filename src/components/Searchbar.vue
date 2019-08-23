<template>
  <div class="header">
    <h1 class="title">Employee Status</h1>
    <div class="search-container">
      <input class="searchbar" type="text" placeholder="Search for a user">
      <img class="search-icon" src="../assets/search.svg" alt="search" v-on:change="searchUser(text)">
    </div>
  </div>
</template>

<script>

export default {
  name: 'searchbar',
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
  }
  .search-icon {
    position: absolute;
    right: 14px;
    width: 18px;
    top: 11px;
  }
</style>
