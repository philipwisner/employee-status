<template>
  <div class="employee-container" v-if="employees">
    <div :key="employee.id" v-for="employee in employees">
      <Employee :employee="employee" :darkMode="darkMode"/>
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
    employees: Array,
    darkMode: Boolean
  }
}
</script>

<style scoped>
  .employee-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -5px 0px -5px;
    height: calc(100vh - 162px);
    overflow-y: auto;
    padding-bottom: 20px;
  }
</style>
