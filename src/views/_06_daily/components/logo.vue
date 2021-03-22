<template>
  <div class="daily_logo">
    <span class="dl1">lo</span><span class="dl2">ve</span>
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
.daily_logo {
  padding-top: 10px;
  font-size: 30px;
  color: #ffffff;
  font-family: "Pacifico";
  transform: rotateZ(-20deg);
  span {
    display: inline-block;
  }
  .dl1 {
    position: relative;
    top: -4px;
    left: 10px;
    transform: rotateZ(90deg);
  }
}
</style>