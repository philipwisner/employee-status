<template>
  <div class="employee">
    <div class="employee-content">
      <div class="image">
        <img class="avatar" :src="employee.profile.image_192" alt="image">
      </div>
      <div class="right-info">
        <p class="name">{{employee.real_name}}</p>
        <p class="username">@{{employee.name}}</p>
        <div class="status">
          <!--<span class="employee-emoji">{{employee.profile.status_emoji}}</span>-->
          <img class= "emoji" src="https://jefferson.slack.com/emoji/squirrel/f35f40c0e0.png" alt="">
          <p v-if="employee.profile.status_text" class="status-text">{{employee.profile.status_text}}</p>
          <p v-else class="status-text">No status</p>
        </div>
      </div>
    </div>
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
    border: 1px solid #D0D0D0;
    box-shadow: 0px 3px 6px rgba(0,0,0,.16);
    border-radius: 3px;
    padding: 15px;
    margin: 5px;
    min-width: 415px;
    max-height: 90px;
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
  .username {
    color: #747474;
  }
  .status {
    display: flex;
    margin-top: 10px;
  }
  .emoji {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
</style>
