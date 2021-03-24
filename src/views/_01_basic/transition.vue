<template>
  <div class="transform">
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
    <div class="test4">
      <h5>测试backface-visibility</h5>
      <div class="test4__1" @click="show('背面')">
        背面不可见，rotateY(90deg)之后就看不到了
      </div>
    </div>
    <div class="test5">
      <h5>测试scale()为负数</h5>
      <div class="test5__1">scale()为负数时，元素会翻转</div>
      <p>
        但是可以这样调整回来：transform: scale(-1) rotateY(180deg)
        rotateX(180deg);
      </p>
    </div>
    <div class="test6">
      <h5>测试skewY</h5>
      <div class="test6__1">skewY</div>
    </div>
    <div class="test7">
      <h5>测试3d</h5>
      <div class="test7__1">translate3d</div>
      <h5>父元素中心点</h5>
    </div>
    <div class="test8">
      <h5>测试scaleZ</h5>
      <div class="test8__1">scaleZ</div>
    </div>
    <div class="test9">
      <h5>测试立方体</h5>
      <div class="area">
        <div class="box">
          <div class="test9__1"></div>
          <div class="test9__2"></div>
          <div class="test9__3"></div>
          <div class="test9__4"></div>
          <div class="test9__5"></div>
          <div class="test9__6"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    show(log) {
      console.log(log);
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin ppp {
  width: 90vw;
  margin: 10px auto;
  border: 1px dashed #00c1de;
}
.transform {
  padding-bottom: 200px;
}
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
    width: 150px;
    height: 100px;
    padding-top: 50px;
    display: flex;
    position: relative;
    transform-style: preserve-3d;
    perspective: 300px;
    perspective-origin: 50px 100px;
    > div {
      position: absolute;
      left: 0;
      width: 100px;
      height: 100px;
      opacity: 0.2;
    }
  }
  &__1 {
    background: red;
  }
  &__2 {
    transform-origin: 0% 50%;
    transform: rotateY(90deg);
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
.test4 {
  &__1 {
    cursor: pointer;
    width: 100px;
    height: 100px;
    background: #00c1de;
    transform: rotateY(45deg);
    backface-visibility: hidden;
  }
}
.test5 {
  &__1 {
    cursor: pointer;
    width: 100px;
    height: 100px;
    background: #00c1de;
    transform: scale(-1);
  }
  p {
    @include ppp;
  }
}
.test6 {
  background: #cccccc88;
  margin-left: 100px;
  &__1 {
    border: 1px dashed #000;
    cursor: pointer;
    width: 100px;
    height: 100px;
    background: #00c1de;
    transform: skewY(45deg);
    // transform: skewX(45deg) skewY(45deg);
    // transform: skewY(45deg);
  }
}
.test7 {
  background: #00ff0088;
  width: 102px;
  margin-top: 100px;
  margin-left: 100px;
  // transform-style: preserve-3d;
  perspective: 300px;
  &__1 {
    border: 1px dashed #000;
    cursor: pointer;
    width: 100px;
    height: 100px;
    background: #00c1de;
    transform: translate3d(0, 0, -200px);
  }
}
.test8 {
  background: #ff000088;
  width: 102px;
  margin-top: 20px;
  margin-left: 100px;
  // transform-style: preserve-3d;
  perspective: 1000px;
  &__1 {
    border: 1px dashed #000;
    cursor: pointer;
    width: 100px;
    height: 100px;
    background: #00c1de;
    transform: scaleZ(10) rotateY(30deg);
  }
}
.test9 {
  background: #cccccc88;
  .area {
    width: 100px;
    height: 100px;
    margin: 0px auto;
    position: relative;
    perspective: 300px;
  }
  .box {
    width: 100px;
    height: 100px;
    position: absolute;
    transform: translateZ(-50px);
    transform-style: preserve-3d;
    &:hover {
    transform: translateZ(-50px) rotateX(360deg);
    transition: all 2s
    }
    > div {
      width: 100px;
      height: 100px;
      background: #00c1de33;
      box-sizing: border-box;
      border: 1px dashed #000;
      position: absolute;
    }
  }
  &__1 {
    transform: translateZ(50px);
  }
  &__2 {
    transform: rotateX(180deg) translateZ(50px);
  }
  &__3 {
    transform: rotateY(-90deg) translateZ(50px);
  }
  &__4 {
    transform: rotateY(90deg) translateZ(50px);
  }
  &__5 {
    transform: rotateX(90deg) translateZ(50px);
  }
  &__6 {
    transform: rotateX(-90deg) translateZ(50px);
  }
}
</style>