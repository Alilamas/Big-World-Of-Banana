<template>
  <div id="designIndex">
    <div class="vertical0 pa"></div>
    <div class="vertical1 pa"></div>
    <div class="transverse0 pa"></div>
    <div class="transverse1 pa"></div>
    <h1 class="h1_web pa">Web</h1>
    <h1 class="h1_design pa">design</h1>
    <h5 class="h5_2021 pa">2021</h5>
    <h5 class="h5_banana pa">Premium</h5>
    <ul class="pushRouter">
      <li @class="pushRouter('kycup')">kycup</li>
    </ul>
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
#designIndex {
  position: relative;
  width: 100vw;
  height: 100vh;
}
h1 {
  text-align: center;
  color: #fff;
  font-size: 100px;
  font-weight: 900;
}
.pa {
  position: absolute;
  z-index: 0;
}
.vertical0 {
  //垂直
  width: 1px;
  height: 100vh;
  background: #66666666;
  left: 35%;
  top: 0;
}
.vertical1 {
  width: 1px;
  height: 100vh;
  background: #66666666;
  left: calc(35% + 229px);
  top: 0;
}
.transverse0 {
  //横
  width: 100vw;
  height: 1px;
  background: #66666666;
  left: 0;
  top: 30%;
}
.transverse1 {
  width: 100vw;
  height: 1px;
  background: #66666666;
  left: 0;
  top: calc(30% + 178px);
}
.h1_web {
  left: 35%;
  top: calc(30% - 17px);
}
.h1_design {
  left: calc(35% + 226px);
  top: calc(30% + 82px);
}
.h5_2021 {
  left: 35%;
  top: 20%;
  font-size: 18px;
  color: #999999;
  font-weight: 300;
  font-family: "PoiretOne";
}
.h5_banana {
  left: calc(35% + 277px);
  top: calc(30% + 24px);
  font-size: 36px;
  color: yellow;
  font-weight: 100;
  font-family: "Allura";
}
////////////////////////////////////////////////////////////////
.pushRouter {
  color: #fff;
  cursor: pointer;
}
</style>