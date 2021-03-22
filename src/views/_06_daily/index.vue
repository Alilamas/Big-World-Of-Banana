<template>
  <div class="daily__index">
    <h1>三行太短，抒不尽这世间的风花雪月，地久天长</h1>
  </div>
</template>

<script>
import Daily from "@/router/modules/daily"; //每日情话
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(Daily);
  },
  methods: {
    pushRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
.daily__index {
  width: 100vw;
  height: 100vh;
  background: url("/static/daily/index.jpg") center no-repeat;
  background-size: cover;
}
</style>

