<template>
  <div class="transform-study">
    <p>2012年9月，发布草案</p>
    <p>translateX()，translateY()，scaleX()，scaleY()，skewX()，skewY()</p>
    <p>translate()，scale()，skewX()，rotate(angle)，skew()</p>
    <p>rotate不能同时创传XY的参，但是rotate3D可以</p>
    <p>transform-origin设置元素变形的原点，可以设置在元素外</p>
    <h5>以下是几种经典的变形</h5>
    <div class="magic">
      <ul>
        <li
          v-for="(tf, index) in List1"
          :key="index"
          :class="List1Index == tf ? 'active' : ''"
          @click="List1Index = tf"
        >
          transform：{{ tf }}
        </li>
      </ul>
      <div class="magic__r">
        <img
          src="/static/used/kycup/跳.png"
          :style="`transform:${List1Index}`"
        />
      </div>
    </div>
    <h5>transform-oringin</h5>
    <p>设置元素变形时候的中心原点</p>
    <div class="magic transform_origin">
      <ul>
        <li
          v-for="(to, indexTO) in transformOriginList"
          :key="indexTO"
          :class="transformOriginIndex == to ? 'active' : ''"
          @click="transformOriginIndex = to"
        >
          transform-origin：{{ to }}
        </li>
      </ul>
      <div class="magic__r">
        <img
          src="/static/used/kycup/跳.png"
          :style="`transform-origin:${transformOriginIndex}`"
        />
      </div>
    </div>
    <h5>perspective</h5>
    <p>极具增加3D感的属性</p>
    <h5>perspective2D</h5>
    <div class="perspective2D">
      <div class="perspective2D__main">
        <div class="perspective2D__1"><div></div></div>
        <div class="perspective2D__2"><div></div></div>
      </div>
    </div>
    <h5>perspective3D</h5>
    <div class="perspective3D">
      <div class="perspective3D__huabu hu-1">
        <div class="d1"></div>
        <div class="d2"></div>
      </div>
      <div class="perspective3D__huabu hu0">
        <div class="d1"></div>
        <div class="d2"></div>
      </div>
      <div class="perspective3D__huabu hu1">
        <div class="d1"></div>
        <div class="d2"></div>
      </div>
      <div class="perspective3D__huabu hu2">
        <div class="d1"></div>
        <div class="d2"></div>
      </div>
      <div class="perspective3D__huabu hu3">
        <div class="d1"></div>
        <div class="d2"></div>
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
  data() {
    return {
      List1Index: "none",
      List1: [
        "none",
        "translate(200px)",
        "translate(100px,50px)",
        "scale(2);",
        "scale(2,0.5);",
        "rotate(45deg)",
        "rotate(0.5turn)",
        "skewX(45deg)",
        "skew(30deg, 20deg)",
        "scale(0.5) translate(-100%, -100%);",
        "rotateZ(90deg)",
      ],
      transformOriginIndex: "none",
      transformOriginList: [
        "left",
        "center",
        "right",
        "right bottom",
        "0px 0px",
        "0px 100px",
        "0px 200px",
        "100px 100px",
        "300px 100px",
        "100px -100px",
      ],
    };
  },
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
h1,
h2,
h3,
h4,
h5 {
  line-height: 50px;
  font-size: 24px;
}
p,
span {
  line-height: 25px;
}
.transform-study {
  padding-bottom: 200px;
  min-height: 100vh;
  background-color: #22669988;
  transition: background-color 0.5s linear;
  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(#ffffff33 1px, transparent 1px),
    linear-gradient(90deg, #ffffff33 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  @media screen and (max-width: 1260px) {
    background-color: #00000033;
  }
  @media screen and (max-width: 800px) {
    transition: background-color 2s linear;
    background-color: rgba(255, 192, 203, 0.555);
  }
}
// transform//@at-root//@at-root//@at-root//@at-root//@at//@at-root

.test3 {
  &__main {
    width: 100px;
    height: 100px;
    display: flex;
    margin: 100px 200px;
    position: relative;
    transform-style: preserve-3d;
    perspective: 300px;
    perspective-origin: 50px 50px;
    transform:rotateY(0deg);
    > div {
      position: absolute;
      left: 0;
      width: 100px;
      height: 100px;
    }
  }
  &__1 {
    background: red;
      opacity: 0.5;
  }
  &__2 {
    transform-origin: 0% 50%;
    transform: rotateY(90deg);
    background: blue;
      opacity: 0.5;
  }
  &__3 {
    transform: translateZ(-100px);
    background: red;
      opacity: 0.2;
  }
  &__4 {
    transform-origin: 100% 50%;
    transform: rotateY(-90deg);
    background: blue;
      opacity: 0.5;
  }
  &__5 {
    transform-origin: 50% 0%;
    transform: rotateX(-90deg);
    background: yellow;
      opacity: 0.2;
  }
  &__6 {
    transform-origin: 50% 100%;
    transform: rotateX(90deg);
    background: yellow;
      opacity: 0.2;
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
      transition: all 2s;
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
.magic {
  margin: 50px 40px;
  display: flex;
  justify-content: left;
  height: 450px;
  ul {
    margin-right: 220px;
    li {
      padding: 6px 10px;
      border-bottom: 2px solid #000;
      line-height: 25px;
      cursor: pointer;
      width: 320px;
    }
    li.active {
      color: #fff;
      background: #000;
    }
  }
  .magic__r {
    border: 5px dashed #000;
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    img {
      width: 200px;
      position: relative;
      left: -5px;
      top: -5px;
      z-index: -1;
    }
  }
}

.transform_origin {
  &.magic {
    height: 400px;
  }
  img {
    animation: qingxie 2s linear infinite;
  }
}
@keyframes xuanzhuan {
  to {
    transform: rotateZ(360deg);
  }
}
@keyframes suofang {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes qingxie {
  0% {
    transform: skewX(0deg);
  }
  50% {
    transform: skewX(45deg);
  }
  100% {
    transform: scale(1);
    transform: skewX(0deg);
  }
}
.perspective2D {
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
        transform-origin: 50% 50%;
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
.perspective3D {
  margin-top: 30px;
  border-top: 1px solid #00c1de;
  padding: 30px 0 0 30px;
  color: #fff;
  &__huabu {
    display: inline-block;
    border: 1px solid #00c1de;
    transform-style: preserve-3d;
    perspective-origin: 50px 50px;
    transform: rotateY(30deg);
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
  }
  .d1 {
    opacity: 1;
  }
  .d2 {
    opacity: 0.8;
    transform-origin: 50% 0;
    transform: rotateX(15deg) translateZ(15px);
  }
  .hu-1 {
    transform: none;
  }
  @for $i from 0 through 3 {
    .hu#{$i} {
      left: #{($i + 1) * 150px};
      perspective: #{($i) * 200px};
    }
  }
}
</style>