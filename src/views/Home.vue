<template>
  <div class="home" :class="{'dark': darkMode}">
    <Searchbar v-on:search-users="searchEmployees" :darkMode="darkMode"/>
    <Filterbar :darkMode="darkMode" :channels="channels" v-on:update-dark-mode="updateDateMode" v-on:selected-channel="getEmployees"/>
    <div v-if="employees && !loading">
      <EmployeeContainer :darkMode="darkMode" :employees="employees"/>
    </div>
    <div v-if="loading">
      <!--<img src="../assets/loading.gif" alt="">-->
      <LoadingSkeleton :employees="employees"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from "@/components/Searchbar.vue";
import Filterbar from "@/components/Filterbar.vue";
import EmployeeContainer from "@/components/EmployeeContainer.vue";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";

export default {
  name: "home",
  components: {
    Searchbar,
    Filterbar,
    EmployeeContainer,
    LoadingSkeleton
  },
  data() {
    return {
      employees: [],
      channels: [],
      loading: true,
      darkMode: false,
    };
  },
  methods: {
    async getEmployees(selectedChannel) {
       if (!selectedChannel) {
         selectedChannel = 'GDVTDFL4A';
       }
      console.log('selectedChannel is', selectedChannel);
      try {
        const response = await fetch(`http://localhost:3000/status/${selectedChannel}`);
        const data = await response.json();
        this.employees = data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
    async getChannels() {
      try {
        const response = await fetch(
          "http://localhost:3000/channels",
        );
        const data = await response.json();
        this.channels = data.map(channel => {
          let format = {};
          format.id = channel.id;
          format.name = channel.name;
          return format;
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getMembers(channelId) {
      try {
        const response = await fetch(
          "http://localhost:3000/members", {
            params: {
              channel: channelId
            }
          }
        );
        const data = await response.json();
        this.channels = data.map(channel => {
          let format = {};
          format.id = channel.id;
          format.name = channel.name;
          return format;
        })
      } catch (error) {
        console.error(error);
      }
    },

    searchEmployees(searchText) {
      console.log('searchEMployees', searchText);
      return this.employees.filter(employee => {
        employee.name == searchText;
      })
    },
    updateDateMode(mode) {
      console.log('updateDarkMode', mode);
      this.darkMode = mode;
    }
  },


  mounted() {
    this.getEmployees();
    this.getChannels();
  }
};
</script>

<style scoped>
.home {
  padding: 20px 50px;
  height: calc(100vh - 40px);
}
.home.dark {
  background: #383838;
  color: white;
}
</style>
