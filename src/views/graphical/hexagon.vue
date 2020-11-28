<template>
  <div class="graphical hexagon">
    <h1>六边形的多种做法</h1>
    <div class="workshop">
      <h5>简单的css和伪元素</h5>
      <div class="furnace m1">
        <div class="m1_base"></div>
      </div>
      <div>
        <p>缺点：box-shadow有问题</p>
      </div>
    </div>
    <div class="workshop">
      <h5>内外2层的transform组合</h5>
      <div class="furnace m2">
        <div class="m2_base">
          <div class="zxc">
            <img src="/static/hexagon_1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <p>缺点：box-shadow有问题</p>
      </div>
    </div>
    <div class="workshop">
      <h5>clip-path</h5>
      <div class="furnace m3">
        <div class="m3_base">
        </div>
      </div>
      <div>
        <p>优点：box-shadow很棒</p>
      </div>
    </div>
    <div class="workshop">
      <h5>麒麟云loading</h5>
      <div class="furnace qlinLoading">
        <div class="qlinyun">
          <div class="qly">
            <div
              v-for="(item, index) in 7"
              :key="index"
              :class="'loading loading_' + (index + 1)"
            >
            <div class="ld">
              <img :src="'/static/graphical/qlinLoading/' + (index + 1) + '.png'">
            </div>
            <div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="workshop">
      <h5>麒麟云loading</h5>
      <div class="furnace magic">
        <div v-for="(item,index) in num" :key='index' class="magic-h">
          <span :class="item"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num:50
    };
  },
  methods: {},
};
</script>
<style lang="sass" scoped>
@import "@/assets/graphical/qlinLoading.scss"
</style>
<style lang="scss" scoped>
.workshop {
  position: relative;
  background: LightYellow;
  min-height:150px;
}
.furnace {
  padding: 50px 0px;
}
// method-1
$m1_base: 100px;
$m1_length: $m1_base * 1.7320508075688772;
.m1 {
  padding: 100px 0px 50px;
}
.m1_base {
  height: $m1_base;
  width: $m1_length;
  background: rgba(255, 0, 0, 0.2);
  position: relative;
}
.m1_base::before {
  content: "";
  height: $m1_base;
  width: $m1_length;
  background: rgba(0, 255, 0, 0.2);
  position: absolute;
  transform: scale(20px);
  transform: magic(60deg);
}
.m1_base::after {
  content: "";
  height: $m1_base;
  width: $m1_length;
  background: rgba(0, 0, 255, 0.2);
  position: absolute;
  transform: magic(-60deg);
}
// method-2
$m2_base: 200px;
$m2_length: $m2_base * (1.7320508075688772 / 2);
.m2_base {
  width: $m2_length;
  height: 0px;
  padding-bottom: $m2_base;
  transform: magic(-60deg) skewY(30deg);
  overflow: hidden;
  position: relative;
  .zxc {
    width: $m2_length;
    height: $m2_base;
    background: blue;
    transform: skewY(-30deg) magic(60deg);
    overflow: hidden;
    text-align: center;
  }
  img {
    width: $m2_length;
    height: $m2_base;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>