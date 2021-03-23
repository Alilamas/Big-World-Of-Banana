<template>
  <div class="animation">
    <p>2012年9月，发布草案</p>
    <p>translateX()，translateY()，scaleX()，scaleY()，skewX()，skewY()</p>
    <p>translate()，scale()，skewX()，rotate(angle)，skew()</p>
    <p>rotate不能同时创传XY的参，但是rotate3D可以</p>
    <p>transform-origin设置元素变形的原点，可以设置在元素外</p>
    <p>
      重置元素原点会影响旋转、缩放、倾斜，但是trnasale()不会，依旧会以元素中心为原点
    </p>
    <p></p>
    <div class="test">
      <div class="huabu">
        <div class="d1"></div>
        <div class="d2"></div>
      </div>
    </div>
    <div class="test2">
      <h5>测试perspective</h5>
      <div class="test2__main">
        <div class="test2__1"><div></div></div>
        <div class="test2__2"><div></div></div>
      </div>
    </div>
    <div class="test3">
      <h5>测试perspective-origin</h5>
      <div class="test3__main">
        <div class="test3__1">前面</div>
        <div class="test3__2">左边</div>
        <div class="test3__3">后面</div>
        <div class="test3__4">右边</div>
        <div class="test3__5">上面</div>
        <div class="test3__6">下面</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.test {
  margin-top: 30px;
  border-top: 1px solid #00c1de;
  padding: 30px 0 0 30px;
  color: #fff;
}
.huabu {
  display: inline-block;
  border: 1px solid #00c1de;
  transform-style: preserve-3d;
  perspective-origin: 50px 50px;
  transform: perspective(200px) rotateY(30deg);
  position: relative;
  height: 102px;
  > div {
    position: absolute;
    left: 0;
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    background: #00c1de;
  }
  .d1 {
    opacity: 1;
  }
  .d2 {
    opacity: 0.8;
    transform-origin: 50% 0;
    transform: rotateX(15deg) translateZ(15px);
  }
}
.test2 {
  &__main {
    margin-left: 30px;
    display: flex;
    > div {
      margin-right: 20px;
      border: 1px solid #000;
      > div {
        width: 100px;
        height: 100px;
        background: #00c1de;
        transform-origin: 50% 100%;
        transform: rotateX(45deg);
      }
    }
  }
  &__1 {
    transform-style: flat;
  }
  &__2 {
    transform-style: preserve-3d;
    perspective: 100px;
  }
}
.test3 {
  &__main {
    margin-top: 200px;
    margin-left: 200px;
    display: flex;
    position: relative;
    transform-style: preserve-3d;
    perspective: 300px;
    > div {
      position: absolute;
      left: 0;
      width: 100px;
      height: 100px;
      opacity: .2;
    }
  }
  &__1 {
    background: red;
  }
  &__2 {
    transform-origin: 0% 50%;
    transform: rotateY(90deg) ;
    background: blue;
  }
  &__3 {
    transform: translateZ(-100px);
    background: red;
  }
  &__4 {
    transform-origin: 100% 50%;
    transform: rotateY(-90deg);
    background: blue;
  }
  &__5 {
    transform-origin: 50% 0%;
    transform: rotateX(-90deg);
    background: yellow;
  }
  &__6 {
    transform-origin: 50% 100%;
    transform: rotateX(90deg);
    background: yellow;
  }
}
</style>