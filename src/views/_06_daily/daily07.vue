<template>
  <div class="daily02">
    <div class="mask"></div>
    <div class="decorate">
      <h1>你走，我不送你，你来，无论多大风多大雨，我要去接你</h1>
    </div>
    <p></p>
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
$color: #fff;
$decorate: 3px;
$_decorate: calc(100% - #{$decorate});

.daily02 {
  width: 100vw;
  height: 100vh;
  background: url("/static/daily/daily07.png") center no-repeat;
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

