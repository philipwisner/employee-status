<template>
  <div class="skeleton">
    <div class="employee" :key="test.id" v-for="test in testing">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSkeleton',
  data () {
    return {
      testing: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    }
  }
}
</script>

<style scoped>
.skeleton {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -5px 10px -5px;
}
.employee {
  background: #e8e8e8;
  border-radius: 3px;
  width: 447px;
  height: 112px;
  margin: 5px;
}
</style>

