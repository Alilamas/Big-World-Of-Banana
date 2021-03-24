<template>
  <div class="transition">
    <h5>给用户更好、更细腻的体验</h5>
    <p>一定要有初始状态样式，因为动画是a到b的过程，除非有默认</p>
    <p>四个属性值：-property，-duration，-timing-function，-delay</p>
    <p>分别是：过渡css属性，所需时间，动画函数，延迟时间</p>
    <div class="test">
      <h5>测试transiton-property</h5>
      <p>很多自己去看吧，主要是能有中点值，可以过渡，比如颜色、长度；但是如font-family这些就不行；</p>
      <h5>测试transiton-duration</h5>
      <p>s和ms都可以，就是简单的一套动画完成所需的时间；<br/>时间为0的话，就是没有过度，直接看到结果；<br/>时间也是可以设置多个的，逗号分隔，与-property的对应；</p>
      <h5>测试transiton-timing-function</h5>
      <p>ease：先快到慢；</p>
      <p>linear：均速；</p>
      <p>ease-in：先比正常慢，然后越来越快；</p>
      <p>ease-out：先比正常快，然后越来越慢；</p>
      <p>ease-out-in：先加速后减速；</p>
      <h5>测试transiton-delay</h5>
      <p></p>
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
  font-size:24px;
}
p,
span {
  line-height: 25px;
}
.transition {
  min-height: 100vh;
  background-color: #22669988;
  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(#ffffff33 1px, transparent 1px),
    linear-gradient(90deg, #ffffff33 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}
.test {
}
</style>