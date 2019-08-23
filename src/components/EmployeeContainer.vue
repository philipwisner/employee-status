<template>
  <div class="employee-container">
    <div :key="employee.id" v-for="employee in employees">
      <Employee :employee="employee"/>
    </div>
  </div>
</template>

<script>
import Employee from './Employee.vue'

export default {
  name: 'EmployeeContainer',
  components: {
    Employee
  },
  props: {
    employees: Array
  }
}
</script>

<style scoped>
  .employee-container {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -5px 10px -5px;
  }
</style>
