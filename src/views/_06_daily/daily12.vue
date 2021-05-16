<template>
  <div class="daily02">
    <div class="mask"></div>
    <div class="decorate">
      <div class="love">
        <p>“喂！那个谁，我喜欢你。”</p>
        <p class="ta-r mt20">“何为喜欢？” </p>
        <p>“脸红，心跳，不言语。”</p>
        <p class="ta-r mt20">“可否具体？”</p>
        <p>“失眠，焦虑，常梦呓。”</p>
        <p class="ta-r mt20">“可否再具体？”</p>
        <p> “余光全部都是你。”</p>
       
      </div>
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
.ta-r {
  text-align: right;
}
.mt20 {
  margin-top: 20px;
}
.daily02 {
  width: 100vw;
  height: 100vh;
  background: url("/static/daily/daily12.png") center no-repeat;
  background-size: cover;
  background-position: 50% 80%;
  position: relative;
  overflow: hidden;
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
  width: 900px;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .love {
    position: relative;
    top: 0;
    opacity: 1;
    p {
    font-size: 56px;
    color: $color;
    font-weight: 100;
    white-space: nowrap;
    }
    &::before {
      content: "";
      position: absolute;
      left: -30px;
      top: -20px;
      background: #fff;
      width: 5%;
      min-width: 60px;
      height: 70px;
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
      height: 70px;
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

