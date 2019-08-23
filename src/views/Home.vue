<template>
  <div class="home">
    <Searchbar />
    <EmployeeContainer :employees="employees" />
  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from "@/components/Searchbar.vue";
import EmployeeContainer from "@/components/EmployeeContainer.vue";

export default {
  name: "home",
  components: {
    Searchbar,
    EmployeeContainer
  },
  data() {
    return {
      employees: []
    };
  },
  methods: {
    async getEmployees() {
      try {
        const response = await fetch(
          "http://localhost:3000/status"
        );
        const data = await response.json();
        this.employees = data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getEmployees();
  }
};
</script>

<style scoped>
.home {
  padding: 20px 50px;
  height: calc(100vh - 42px);
}
</style>
