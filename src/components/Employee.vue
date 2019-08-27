<template>
  <div class="employee" :class="{'dark': darkMode}">
    <div class="employee-content">
      <div class="image">
        <img class="avatar" :src="employee.profile.image_192" alt="image" />
      </div>
      <div class="right-info">
        <p class="name">{{employee.real_name}}</p>
        <p class="username">@{{employee.name}}</p>
        <div class="status">
          <!--<span class="employee-emoji">{{employee.profile.status_emoji}}</span>-->
          <span v-if="employee.profile.status_emoji == ':house:' || employee.profile.status_emoji == ':house_with_garden:'" class="emoji">&#x1F3E0;</span>
          <span v-if="employee.profile.status_emoji == ':office:'" class="emoji">&#x1F3E2;</span>
          <span v-if="employee.profile.status_emoji == ':palm_tree:'" class="emoji">&#x1F334;</span>
          <span v-if="employee.profile.status_emoji == ':face_with_thermometer:'" class="emoji">&#x1F912;</span>
          <span v-if="employee.profile.status_emoji == ':runner:'" class="emoji">&#x1F3C3;</span>
          <span v-if="employee.profile.status_emoji == ':spiral_calendar_pad:'" class="emoji">&#x1F5D3;</span>
          <span v-if="employee.profile.status_emoji == ':pizza:'" class="emoji">&#x1F355;</span>
          <span v-if="employee.profile.status_emoji == ':slack_call:'" class="emoji">&#x1F4DE;</span>
          <span v-if="employee.profile.status_emoji == ':door:'" class="emoji">&#x1F6AA;</span>
          <span v-if="employee.profile.status_emoji == ':man-woman-girl-boy:'" class="emoji">&#x1F46A;</span>
          <span v-if="employee.profile.status_emoji == ''" class="emoji none">&#x26AB;</span>
          <!--<img class= "emoji" src="https://jefferson.slack.com/emoji/squirrel/f35f40c0e0.png" alt="">-->
          <p v-if="employee.profile.status_text" class="status-text">{{employee.profile.status_text}}</p>
          <p v-else class="status-text">No status</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employee",
  props: {
    employee: Object,
    darkMode: Boolean
  }
};
</script>

<style scoped>
.employee {
  border: 1px solid #d0d0d0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  padding: 15px;
  margin: 5px;
  min-width: 415px;
  max-height: 90px;
  background: white;
}
.employee.dark {
  background: #6A6A6A;
  border: 1px solid transparent;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.33);
}
.employee-content {
  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: center;
}
.image {
  flex: 0 1 auto;
}
.avatar {
  max-width: 80px;
  margin-bottom: -6px;
  border-radius: 3px;
}
.right-info {
  flex: 1 1 auto;
  text-align: left;
  margin-left: 20px;
}
.name {
  color: black;
  font-size: 22px;
  font-weight: 600;
}
.employee.dark .name {
  color: white;
}
.username {
  color: #747474;
}
.employee.dark .username {
  color: white;
}
.status {
  display: flex;
  margin-top: 5px;
}
.emoji {
  width: 18px;
  height: 18px;
  margin-right: 5px;
  margin-top: -3px;
}

.emoji.none {
  font-size: 12px;
  margin-top: 1px;
}
</style>
