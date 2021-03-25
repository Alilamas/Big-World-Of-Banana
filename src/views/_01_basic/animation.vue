<template>
  <div class="animation">
    <h5>通过关键帧，实现更为复杂的动画效果</h5>
    <p>简单讲，设定一个事件，然后让元素这么干，干多久，怎么干，干几次，啥时候开始干，干完了保持什么状态</p>
    <h5>8个属性</h5>
    <p>-name，-duration，-time-function，-delay，-iteration-count，-direction，-play-state，-fill-mode</p>
    <h5>前四同 <span @click="pushRouter('transition')">transition</span></h5>
    <h5>-iteration-count：播放次数</h5>
    <p>infinite，为无线，其他就是其他</p>
    <h5>-direction：播放方向</h5>
    <p>normal：正常反向</p>
    <p>alternate：奇数(2n+1)正向，偶数(2n)反向</p>
    <h5>-play-stat：播放状态</h5>
    <p>一般适用于running和paused</p>
    <p>应用场景入音乐播放器</p>
    <h5>-fill-mode：动画时间外的属性</h5>
    <p>forwards为结束时为最后关键帧</p>
    <p>backwards为结束时为起始关键帧</p>
    <div class="test1">
      <div class="test1__1"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    show(log) {
      console.log(log);
    },
    pushRouter(name) {
      this.$router.push({name})
    }
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
.animation {
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
    transition: background-color 2s linear infinite ;
    background-color: #22669988;
  }
}
h5 span {
  text-decoration: underLine;
  cursor: pointer;
  &:hover {
    color: #00c1de; 
  }
}
.test1 {
  margin-left: 20px;
  &__1 {
    width: 100px;
    height: 100px;
    background: #00c1de;
    animation: leftX 2s linear infinite alternate ;
    @keyframes leftX {
      to {
        transform: translateX(500px);
      }
      
    }
  }
}
</style>