<template>
  <div>
    <nav>
      <div class="daily_logo"><span class="dl1">lo</span><span class='dl2'>ve</span></div>
      <ul>
        <li></li>
      </ul>
    </nav>
    <router-view class="daliy_view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.daliy_view {
  min-height: 600px;
}
nav {
  width: 100%;
  padding: 0 10px;
  position: fixed;
  left: 0;
  top: 0;
  z-index:100;
  display: flex;
  justify-content:left;
  .daily_logo {
    padding-top: 10px;
    font-size: 30px;
    color: #ffffff;
    font-family: "Pacifico";
      transform: rotateZ(-20deg);
    span {
      display:inline-block;
    }
    .dl1 {
      position: relative;
      top: -4px;
      left: 10px;
      transform: rotateZ(90deg);
    }
  }
  ul {
  display: flex;
  justify-content:left;
  }
}
</style>