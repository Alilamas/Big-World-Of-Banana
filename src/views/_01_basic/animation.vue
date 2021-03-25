<template>
  <div class="transition">
    <h5>给用户更好、更细腻的体验</h5>
    <p>一定要有初始状态样式，因为动画是a到b的过程，除非有默认</p>
    <p>四个属性值：-property，-duration，-timing-function，-delay</p>
    <p>分别是：过渡css属性，所需时间，动画函数，延迟时间</p>
    <div class="test">
      <h5>测试transiton-property</h5>
      <p>
        很多自己去看吧，主要是能有中点值，可以过渡，比如颜色、长度；但是如font-family这些就不行；
      </p>
      <h5>测试transiton-duration</h5>
      <p>
        s和ms都可以，就是简单的一套动画完成所需的时间；<br />时间为0的话，就是没有过度，直接看到结果；<br />时间也是可以设置多个的，逗号分隔，与-property的对应；
      </p>
      <h5>测试transiton-timing-function</h5>
      <h5>部分一：</h5>
      <p>ease：先快到慢；</p>
      <p>linear：均速；</p>
      <p>ease-in：先比正常慢，然后越来越快；</p>
      <p>ease-out：先比正常快，然后越来越慢；</p>
      <p>ease-out-in：先加速后减速；</p>
      <p><b>详见454页</b></p>
      <h5>部分二：来了来了！！！</h5>
      <h5>贝塞尔曲线！bezier！</h5>
      <h5>函数名：cubic-bezier</h5>
      <p>意思为三次贝塞尔曲</p>
      <p>工具网址 -> http://cubic-bezier.com</p>
      <h5>部分三来了来了！！！</h5>
      <p>step()函数</p>
      <div class="test1">
        <div class="test1__1"></div>
      </div>
      <h5>测试transiton-delay</h5>
      <p>同transiton-duration</p>
      <h5>CSS3触发 →</h5>
      <h5>通过伪元素触发</h5>
      <p>:active；:focus；:checked；:hover；</p>
      <h5>通过媒体查询触发</h5>
      <p>@media only screen and(max-width:960px)</p>
      <p><b>可以尝试看看背景渐变</b></p>
      <h5>通过JS触发</h5>
      <h5>通过媒体查询触发</h5>
      <p>大多是说值为 em 的属性；</p>
      <div class="test2">
        <h5>测试几乎无限延迟的过渡</h5>
        <div class="test2__1"></div>
      </div>
      <div class="test3">
        <h5>测试硬件加速</h5>
        <div class="test3__1"></div>
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
.transition {
  padding-bottom: 200px;
  min-height: 100vh;
  background-color: green;
  transition: background-color 0.5s linear;
  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(#ffffff33 1px, transparent 1px),
    linear-gradient(90deg, #ffffff33 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  @media screen and (max-width: 1260px) {
    background-color: pink;
  }
  @media screen and (max-width: 800px) {
    transition: background-color 2s linear;
    background-color: #22669988;
  }
}
.test1 {
  margin-left: 20px;
  &__1 {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #000;
    background: #00c1de88;
    animation: 2s test1 steps(4, start) infinite;
    // animation: 2s test1 cubic-bezier(1,1.57,0,.74);
    @keyframes test1 {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(80px);
      }
    }
  }
}
.test2 {
  margin-left: 20px;
  &__1 {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #000;
    background: #00c1de88;
    transition: all 999999s ease-out;
  }

  &:hover {
    .test2__1 {
      transform: translateX(100px);
      transition: all 2s;
    }
  }
}
.test3 {
  margin-left: 20px;
  &__1 {
    width: 300px;
    height: 300px;
    background: #00c1de;
    transition: all 2s ease;
    transform:translate(0);//用来gui加速的
    &:hover {
      width: 100px;
      height: 200px; 
    }
  }
}
</style>