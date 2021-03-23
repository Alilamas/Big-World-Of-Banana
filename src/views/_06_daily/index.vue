<template>
  <div class="daily__index">
    <div class="mask"></div>
    <div class="decorate">
      <h1>三行太短，抒不尽这世间的风花雪月，地久天长</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    pushRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
$color: #fff;
$decorate: 3px;
$_decorate: calc(100% - #{$decorate});

.daily__index {
  width: 100vw;
  height: 100vh;
  background: url("/static/daily/index.jpg") center no-repeat;
  background-size: cover;
  position: relative;
  overflow:hidden;
}
.decorate,
.mask {
  position: absolute;
}
.mask {
  background: #00000088;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 10;
}
.decorate {
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 56px;
    color: $color;
    font-weight: 100;
    white-space: nowrap;
    position: relative;
    top: 0;
    opacity: 1;
    &::before {
      content: "";
      position: absolute;
      left: -30px;
      top: -20px;
      background: #fff;
      width: 5%;
      min-width: 60px;
      height: 40%;
      clip-path: polygon(
        0 0,
        100% 0,
        100% $decorate,
        $decorate $decorate,
        $decorate 100%,
        0 100%
      );
      animation: show 1.8s linear 1;
    }
    &::after {
      content: "";
      position: absolute;
      right: -30px;
      bottom: -15px;
      background: #fff;
      width: 5%;
      min-width: 60px;
      height: 40%;
      clip-path: polygon(
        100% 100%,
        0 100%,
        0 $_decorate,
        $_decorate $_decorate,
        $_decorate 0,
        100% 0
      );
      animation: show 1.8s linear 1;
    }
    animation: decorate 1.2s ease-out 1;
    @keyframes decorate {
      0% {
        top: -100px;
        opacity: 0;
      }
      100% {
        top: 0;
        opacity: 1;
      }
    }
    @keyframes show {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>

