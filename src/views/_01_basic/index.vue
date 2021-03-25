<template>
  <div id="basicIndex">
    <ul>
      <li @click="pushRouter('scss-study')">scss-study</li>
      <li @click="pushRouter('transform')">transform</li>
      <li @click="pushRouter('transition')">transition</li>
      <li @click="pushRouter('animation')">animation</li>
    </ul>
    <div class="magic">
      <h5>HTML<b>&</b>CSS</h5>
      <P>besign and bulid website</P>
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
      <div class="line line4"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    pushRouter(name) {
      this.$router.push({name})
    }
  }
}
</script>
<style lang="scss" scoped>
$sqrt2: 1.4158;
$width: 200px;
$height: 40px;
$margin: ($width - $height/2)*$sqrt2;

#basicIndex {
  width: 100vw;
  height: 100vh;
  background: #393535;
}
.magic {
  position: relative;
  display: inline-block;
  width: 300px;
  height: 300px;
  padding-top: calc(50vh - 150px);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 6px;
    b {
      color: #dd7a52;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
  }
  .line {
    width: 2*$width;
    height: $height;
    position: absolute;
    z-index: 10;
  }
  .line1 {
    background: #dd7951cc;
    transform:rotate(45deg);
    margin-left: $margin;
    margin-bottom: $margin;
    z-index: 15;
  }
  .line2 {
    background: #c4bdabcc;
    transform:rotate(135deg);
    margin-left: $margin;
    margin-top: $margin;
  }
  .line3 {
    background: #53aafdcc;
    transform:rotate(-135deg);
    margin-right: $margin;
    margin-top: $margin;
  }
  .line4 {
    background: #a7d4a7cc;
    transform:rotate(-45deg);
    margin-right: $margin;
    margin-bottom: $margin;
  }
}
</style>