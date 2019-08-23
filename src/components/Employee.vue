<template>
  <div class="employee">
    {{employee.name}}
  </div>
</template>

<script>

export default {
  name: 'Employee',
  props: {
    employee: Object
  }
}
</script>

<style scoped>
  .employee {
    border: 1px solid green;
    height: 100px;
    width: 400px;
  }
</style>
