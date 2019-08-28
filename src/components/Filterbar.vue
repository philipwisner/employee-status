<template>
  <div class="filter-bar">
    <div class="channel">
      <select name="channel" id="channel" v-model="selectedChannel" @change="selectChannel">
        <option :key="channel.id" v-for="channel in channels" :value="channel.id">{{channel.name}}</option>
      </select>
    </div>
    <div class="color-mode">
      <button v-if="!darkMode" @click="setDarkMode(true)"> <img class="moon" src="../assets/moon.svg" alt="moon"></button>
      <button v-if="darkMode" @click="setDarkMode(false)"><img src="../assets/sun.svg" alt="sun"></button>
    </div>
    <div class="filter-menu">
      <select name="filter" id="filter">
        <option default>Filter Status</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filterbar',
  data () {
    return {
      selectedChannel: "GDVTDFL4A",
    }
  },
  props: {
    darkMode: Boolean,
    channels: Array,
  },
  methods: {
    setDarkMode(mode) {
      this.$emit('update-dark-mode', mode);
      console.log('mode', mode);
    },
    selectChannel() {
      this.$emit('selected-channel', this.selectedChannel);
      console.log('select channel ran', this.selectedChannel);
    }
  },
}
</script>

<style scoped>
.filter-bar {
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
}
.channel {
  flex: 1 1 auto;
  text-align: left;
}
#channel {
  min-width: 160px;
}
select {
  background: none;
  border: none;
  font-size: 16px;
}
.color-mode {
  flex: 0 1 auto;
}
.filter-menu {
  flex: 0 1 auto;
  min-width: 150px;
  text-align: right;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  top: 2px;
}
.moon {
  width: 15px;
}
</style>