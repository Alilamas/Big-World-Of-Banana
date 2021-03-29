<template>
  <div class="daily_logo" @click="pushRouter('daily')">
    <span class="dl1">lo</span><span class="dl2">ve</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    pushRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
.daily_logo {
  cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='32' height='38' viewport='0 0 100 100' style='fill:black;font-size:19px;'><text y='50%'>❤️</text></svg>") 16 0,auto; /*!emojicursor.app*/
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