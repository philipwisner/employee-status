<template>
  <div class="home">
    <Header />
    <EmployeeContainer :employees="employees" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import EmployeeContainer from "@/components/EmployeeContainer.vue";

export default {
  name: "home",
  components: {
    Header,
    EmployeeContainer
  },
  data() {
    return {
      employees: [
        {
          name: "test"
        },
        {
          name: "hi"
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  padding: 20px 50px;
  height: calc(100vh - 42px);
}
</style>
