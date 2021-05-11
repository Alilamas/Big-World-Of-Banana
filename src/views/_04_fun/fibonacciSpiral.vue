<template>
  <div id="fibonacciSpiral">
    <h5>斐波那契螺旋线</h5>
    <h5>Fn=F（n-1）+F（n-2）</h5>
    <div class="fsbox_1 fsbox">
      <div class="fsc fsbox_1_circular"></div>
    </div>
    <div class="fsbox_2 fsbox">
      <div class="fsc fsbox_2_circular"></div>
    </div>
    <div class="fsbox_3 fsbox">
      <div class="fsc fsbox_3_circular"></div>
    </div>
    <div class="fsbox_4 fsbox">
      <div class="fsc fsbox_4_circular"></div>
    </div>
    <div class="fsbox_5 fsbox">
      <div class="fsc fsbox_5_circular"></div>
    </div>
    <div class="fsbox_6 fsbox">
      <div class="fsc fsbox_6_circular"></div>
    </div>
    <banana/>
  </div>
</template>
<style lang="scss" scoped>
#fibonacciSpiral {
  position: relative;
  .fsbox {
    border: 2px solid #fff;
    position: absolute;
    overflow: hidden;
  }
  .fsc {
    border: 2px solid #fff;
    border-radius: 50%;
  }
  div {
    display: inline-block;
  }
}
h5 {
  color: #fff;
  margin: 30px;
}
.fsbox_1 {
  width: 200px;
  height: 200px;
  background: #8f653b;
  left: 500px;
  top: 200px;
  &_circular {
    background: #edcb67;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
  }
}
.fsbox_2 {
  width: 124px;
  height: 124px;
  background: #b58539;
  left: 374px;
  top: 276px;
  &_circular {
    background: #7d6a98;
    width: 248px;
    height: 248px;
    transform: translate(-2px,-50%);
  }
}
.fsbox_3 {
  width: 74px;
  height: 74px;
  background: #eac374;
  left: 374px;
  top: 200px;
  &_circular {
    background: #56aca9;
    width: 150px;
    height: 150px;
    transform: translate(-2px,-2px);
  }
}
.fsbox_4 {
  width: 48px;
  height: 48px;
  background: #d77c83;
  left: 450px;
  top: 200px;
  &_circular {
    background: #da8f3c;
    width: 96px;
    height: 96px;
    transform: translate(-50%,-2px);
  }
}
.fsbox_5 {
  width: 22px;
  height: 24px;
  background: #6e993f;
  left: 476px;
  top: 250px;
  &_circular {
    background: #ce474b;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -48%);
  }
}
.fsbox_6 {
  width: 24px;
  height: 24px;
  background: #000;
  left: 450px;
  top: 250px;
  &_circular {
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}
</style>