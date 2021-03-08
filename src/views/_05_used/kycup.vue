<template>
  <div id="kycup">
    <div class="part1">
      <h5>部分一</h5>
      <img src="/static/used/kycup/缩放.png" class="p1a1" />
      <div class="p1a2">
        <p>立即报名</p>
      </div>
      <img src="/static/used/kycup/跳动.png" class="p1a3" />
      <img src="/static/used/kycup/跳.png" class="p2a1" />
      <img src="/static/used/kycup/缩放.png" class="p3a1" />
      <img src="/static/used/kycup/红星.png" class="p4a1" />
      <img src="/static/used/kycup/蓝星.png" class="p4a2" />
    </div>
    <div class="svg">
      <h1>赛程安排</h1>
      <svg version="1.1">
        <circle
          cx="960"
          cy="150"
          r="137.5"
          stroke="white"
          stroke-width="25"
          fill="none"
          stroke-dasharray="431.6"
          stroke-dashoffset="647"
        >
          <animate
            id="op"
            attributeName="stroke-dashoffset"
            from="647"
            to="215.875"
            dur="1s"
            fill="freeze"
            begin="1s"
          />
        </circle>
        <circle
          cx="960"
          cy="150"
          r="62.5"
          stroke="white"
          stroke-width="25"
          fill="none"
          stroke-dasharray="196"
          stroke-dashoffset="294"
        >
          <animate
            id="op"
            attributeName="stroke-dashoffset"
            from="294.375"
            to="98.125"
            dur="1s"
            fill="freeze"
            begin="1s"
          />
        </circle>
        <rect x="810" y="0" width="150" height="300" style="fill: blue" />
        <rect x="0" y="0" width="960" height="25" style="fill: white">
          <animate
            attributeName="width"
            from="0"
            to="960"
            dur="1s"
            fill="freeze"
          />
        </rect>
        <rect x="0" y="25" width="960" height="50" style="fill: blue">
          <animate
            attributeName="width"
            from="0"
            to="960"
            dur="1s"
            fill="freeze"
          />
        </rect>
        <rect x="0" y="75" width="960" height="25" style="fill: white">
          <animate
            attributeName="width"
            from="0"
            to="960"
            dur="1s"
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#kycup {
  width: 100vw;
  height: 100%;
  background-color: blue;
}
.p1a1 {
  width: 200px;
  animation: p1a1 1.2s infinite forwards;
}
@keyframes p1a1 {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.75);
  }
  100% {
    transform: scaleY(1);
  }
}
.p1a2 {
  background: url("/static/used/kycup/同心转.png");
  background-size: contain;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: p1a2 4s infinite forwards linear;
  p {
    color: #fff;
  }
}
@keyframes p1a2 {
  100% {
    // transform: rotateZ(360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.p1a3 {
  width: 200px;
  animation: p1a3 3s infinite forwards;
}
@keyframes p1a3 {
  0% {
  }
  50% {
    transform: translateY(80px);
  }
  100% {
  }
}
.p2a1 {
  width: 200px;
  animation: p2a1 0.6s infinite forwards ease-in-out;
}
@keyframes p2a1 {
  0% {
    transform: translateY(120px);
  }
  50% {
    transform: translateY(0px);
    transform: scaleY(1.25);
  }
  100% {
    transform: translateY(120px);
  }
}
.p3a1 {
  width: 200px;
  animation: p3a1 4s infinite forwards linear;
}
@keyframes p3a1 {
  100% {
    // transform: rotateZ(360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.p4a1 {
  width: 200px;
  animation: p4a1 1s infinite forwards;
}
@keyframes p4a1 {
  0% {
  }
  50% {
    transform: scale(0.5);
  }
  100% {
  }
}
.p4a2 {
  width: 200px;
  animation: p4a1 1s -0.5s infinite forwards;
}
.svg {
  width: 100%;
  margin-top: 300px;
  height: 700px;
  position: relative;
  h1 {
    position:absolute;
    right: 400px;
    top: 150px;
    z-index: 10;
    color: #fff;
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 600px;
  }
}
</style>