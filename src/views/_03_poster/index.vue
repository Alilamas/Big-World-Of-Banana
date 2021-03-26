<template>
  <div class="poster__index">
    <div class="first">
      <div class="first__bg">
        <div v-for="bg in 8" :key="bg" :class="`fbg${bg}`"></div>
      </div>
      <div class="first__text">
        <span
          v-for="(i, index) in 'WELCOME'"
          :key="index"
          :class="`ft${index + 1}`"
          >{{ i }}</span
        >
      </div>
    </div>
    <banana />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    pushRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
.poster__index {
  background: #333333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.first {
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @for $i from 1 through 8 {
    .fbg#{$i} {
      height: 100vh;
      width: 12.5%;
      position: absolute;
      left: calc(12.5% * (#{$i} - 1));
      background: hsl(calc(360 / 8 * #{$i - 1}) 100% 50%);
      opacity: 0;
      animation: 2s fbg ease-in-out 1 forwards;
    }
  }
  @keyframes fbg {
    0% {
      width: 0;
      opacity: 0;
    }
    50% {
      width: 12.5%;
      opacity: 1;
    }
    100% {
      width: 25%;
      opacity: 0;
    }
  }
  &__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    span {
      font-size: 24px;
      display: inline-block;
      width: 32px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    
  @for $i from 1 through 7 {
    .ft#{$i} {
      background: hsl(calc(360 - 360 / 7 * #{$i}) 100% 50%);
    }
  }
  }
}
</style>

