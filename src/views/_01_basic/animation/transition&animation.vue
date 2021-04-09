<template>
  <div class="ta">
    <div
      class="transition"
      :class="hidden === true ? 'hidden' : hidden === false ? 'hiddening' : ''"
      @click="tahidden"
    >
      <css-doodle>
        :doodle { @grid: 12 / 50vmin 80vmin; perspective: 90vmin;
        perspective-origin: 0% -140%; transform: scale(.6); } :container {
        transform-style: preserve-3d; animation: camera 5s ease-in-out infinite;
        animation-direction: alternate-reverse; } --ds: @r(1.5s, 6s, .1);
        --size: @r(1, 9); /* Thanks to mootari for the tip */ --z: calc(@i() *
        .0001px + var(--size) * .1px); animation: move var(--ds) linear
        infinite, opacity var(--ds) linear infinite; animation-delay:
        calc((@row() - @size-row()) * var(--ds) / @size-row() - @r(@size()) *
        .1s); :after { content: ''; @size: calc(var(--size) * 10%); background:
        @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d); } position: absolute; left:
        calc(@col() * 100% / @size-row()); @size: calc(100% / @size-row());
        @keyframes move { 0% { transform: translate3d(0, 0, calc(var(--z) -
        15vmin)) rotateX(180deg) scaleY(.01); } 10% { transform: translate3d(0,
        calc(10% * @size-row()), var(--z)) rotateX(0) scaleY(.8); } 90% {
        transform: translate3d(0, calc(90% * @size-row()), var(--z)) scale(1); }
        100% { transform: translate3d(0, calc(100% * @size-row()), calc(var(--z)
        + 5vmin)) scale(.5); } } @keyframes opacity { 0%, 100% { opacity: 0; }
        10%, 90% { opacity: .9; } } @keyframes camera { from { transform:
        rotateX(-45deg) rotate(140deg) translateY(-10%); } to { transform:
        rotateX(-45deg) rotate(220deg) translateY(-10%); } }
      </css-doodle>
      <div class="title">
        <h5>transition</h5>
        <ul>
          <li v-for="i in transitionList" :key="`t-${i}`">
            <span :class="hidden !== null ? 'spanShow' : ''">{{ i.cn }}</span
            >{{ i.zh }}
          </li>
        </ul>
      </div>
    </div>
    <div
      class="animation"
      :class="hidden === true ? 'hidden' : hidden === false ? 'hiddening' : ''"
      @click="tahidden"
    >
      <css-doodle class="doodle" grid="12">
        :doodle { @grid: 12 / 100vmax; background: #0a0c27; filter: blur(.1px);
        transform: scale(1.1) } @random { border: 3px solid hsla(158, 70%, 68%,
        @rand(0.3)); } @random { filter: blur(1.5px); } @random { animation:
        move 4s linear alternate infinite; } @random(0.1) { animation: flicker
        5s ease infinite; } @keyframes move { 0% { transform: translate(
        @rand(-50%, 50%), @rand(-50%, 50%) ); } 100% { transform: translate(
        @rand(-50%, 50%), @rand(-50%, 50%) ); } } @keyframes flicker { 0% {
        opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } border-radius:
        50%; background: hsla(158, 70%, 68%, @rand(0.6)); transform:
        scale(@rand(.5, 1.2)) translate( @rand(-50%, 50%), @rand(-50%, 50%) );
      </css-doodle>
      <div class="title">
        <h5>animation</h5>
        <ul>
          <li v-for="a in animationList" :key="`a-${a}`">
            {{ a.zh
            }}<span :class="hidden !== null ? 'spanShow' : ''">{{ a.cn }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="top">
        <h5>过渡 transition</h5>
        <ul>
          <li v-for="i in transitionList" :key="`main-t-${i}`">
            {{ i.zh }}
          </li>
        </ul>
        <ul>
          <li v-for="a in animationList" :key="`main-a-${a}`">
            {{ a.zh }}
          </li>
        </ul>
        <h5>动画 animation</h5>
      </div>
      <div class="_name">
        <h5>transition-property和animation-name</h5>
        <p>
          这两个其实很像，都是定义动画影响哪些效果的，transition-property定义哪些属性被过渡效果影响，而animation-name则定义关键帧
        </p>
        <p>transition-property的值，none、all或者属性值，如：background</p>
        <p>animation-name则只有none或者ident也就是通过@keyframes声明的动画</p>
      </div>
      <div class="_duration">
        <h5>transition-duration和animation-duration</h5>
        <div class="_duration_">
          <p>1s</p>
          <div class="_duration_1"></div>
          <p>2s</p>
          <div class="_duration_2"></div>
        </div>
      </div>
      <div class="_timing-function">
        <h5>transition-timing-function和animation-timing-function</h5>
        <div class="_timing-function_">
          <p>linear</p>
          <div class="_timing-function_1"></div>
          <p>ease</p>
          <div class="_timing-function_2"></div>
          <p>ease-in</p>
          <div class="_timing-function_3"></div>
          <p>ease-out</p>
          <div class="_timing-function_4"></div>
          <p>ease-in-out</p>
          <div class="_timing-function_5"></div>
        </div>
      </div>
      <div class="_delay">
        <h5>transition-delay和animation-delay</h5>
        <div class="_delay_">
          <p>none</p>
          <div class="_delay_0"></div>
          <p>1s</p>
          <div class="_delay_1"></div>
          <p>3s</p>
          <div class="_delay_2"></div>
          <p>5s</p>
          <div class="_delay_3"></div>
        </div>
      </div>
      <div class="_iteration-count"  @click="iterationCount = true">
        <h5>animation-iteration-count</h5>
        <div class="_iteration-count_"  :class="iterationCount?'running':''">
          <p>1次</p>
          <div class="_iteration-count_0"></div>
          <p>2次</p>
          <div class="_iteration-count_1"></div>
          <p>无线</p>
          <div class="_iteration-count_2"></div>
        </div>
      </div>
      <div class="_direction"  @click="direction = true">
        <h5>animation-direction</h5>
        <div class="_direction_"  :class="direction?'running':''">
          <p>normal</p>
          <div class="_direction_0"></div>
          <p>reverse</p>
          <div class="_direction_1"></div>
          <p>alternate</p>
          <div class="_direction_2"></div>
          <p>alternate-reverse</p>
          <div class="_direction_3"></div>
        </div>
      </div>
      <div class="_play-state" @click="playState = !playState">
        <h5>animation-play-state</h5>
        <div class="_play-state_">
          <div class='_play-state_0'  :class="playState?'running':'paused'"></div>
        </div>
      </div>
      <div class="_fill-mode" @click="fillMode = true">
        <h5>animation-fill-mode</h5>
        <div class="_fill-mode_" :class="fillMode?'running':''">
          <p>none</p>
          <div class='_fill-mode_0'></div>
          <p>forwards</p>
          <div class='_fill-mode_1'></div>
          <p>backwards</p>
          <div class='_fill-mode_2'></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "css-doodle";
export default {
  data() {
    return {
      hidden: true,
      iterationCount:false,
      playState: true,
      direction:false,
      fillMode:false,
      transitionList: [
        { zh: "-property", cn: "属性" },
        { zh: "-duration", cn: "过渡时间" },
        { zh: "-timing-function", cn: "过渡函数" },
        { zh: "-delay", cn: "过渡延时" },
      ],
      animationList: [
        { zh: "-name", cn: "关键帧名称" },
        { zh: "-duration", cn: "播放时间" },
        { zh: "-timing-function", cn: "播放方式" },
        { zh: "-delay", cn: "开始播放时间" },
        { zh: "-iteration-count", cn: "播放次数" },
        { zh: "-direction", cn: "播放方向" },
        { zh: "-play-state", cn: "播放状态" },
        { zh: "-fill-mode", cn: "时间外属性" },
      ],
    };
  },
  methods: {
    tahidden() {
      this.hidden === false
        ? (this.hidden = true)
        : this.hidden === null
        ? (this.hidden = false)
        : "";
    },
  },
};
</script>
<style lang="scss" scoped>
.ta {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  background-color: #83b883;
  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(#ffffff33 1px, transparent 1px),
    linear-gradient(90deg, #ffffff33 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  @media screen and (max-width: 1260px) {
    background-color: pink;
  }
  @media screen and (max-width: 900px) {
    transition: background-color 1s linear;
    background-color: #22669988;
  }
  .transition,
  .animation {
    width: 50vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    color: white;
    h5 {
      font-size: 32px;
      margin-top: 20px;
    }
    ul {
      li {
        font-size: 18px;
        margin-top: 20px;
        span {
          opacity: 0;
        }
        .spanShow {
          opacity: 1;
          transition: all 0.7s;
        }
      }
    }
  }
  .hiddening {
    cursor: pointer;
  }
  .hidden {
    transition: all 1.5s linear;
    opacity: 0;
  }
}
.transition {
  background: #252b2a;
  position: relative;
  z-index: 10;
  left: 0;
  .title {
    padding-right: 10px;
    text-align: right;
  }
  ul li span {
    margin-right: 40px;
  }
  css-doodle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.animation {
  position: relative;
  z-index: 10;
  left: 50%;
  .title {
    padding-left: 10px;
    text-align: left;
  }
  ul li span {
    margin-left: 40px;
  }
}
.title {
  box-sizing: border-box;
  width: 100%;
}
css-doodle,
.title {
  position: absolute;
  left: 0;
  top: 0;
}
.main {
  position: relative;
  z-index: 100;
  h5 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  > div {
    width: 100%;
  }
}
.top {
  ul {
    display: flex;
    li {
      width: 130px;
    }
  }
}
._duration_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
  }
  &:hover {
    > div {
      transform: translateX(400px);
    }
    ._duration_1 {
      transition: 1s all;
    }
    ._duration_2 {
      transition: 2s all;
    }
  }
}
._timing-function_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
  }
  &:hover {
    > div {
      transform: translateX(400px);
    }
    ._timing-function_1 {
      transition: all 2s linear;
    }
    ._timing-function_2 {
      transition: all 2s ease;
    }
    ._timing-function_3 {
      transition: all 2s ease-in;
    }
    ._timing-function_4 {
      transition: all 2s ease-out;
    }
    ._timing-function_5 {
      transition: all 2s ease-in-out;
    }
  }
}
._delay_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
  }
  &:hover {
    > div {
      transform: translateX(400px);
    }
    ._delay_0 {
      transition: 5s all 0s linear;
    }
    ._delay_1 {
      transition: 5s all 1s linear;
    }
    ._delay_2 {
      transition: 5s all 2s linear;
    }
    ._delay_3 {
      transition: 5s all 5s linear;
    }
  }
}
._iteration-count_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
    animation: 2s youbiandong linear 1 paused;
  }
  &.running > div {
    animation-play-state: running
  }
  ._iteration-count_0 {
    animation-iteration-count:1;
  }
  ._iteration-count_1 {
    animation-iteration-count:2;
  }
  ._iteration-count_2 {
    animation-iteration-count:infinite;
  }
}
._direction_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
    animation: 2s youbiandong linear infinite normal paused;
  }
  &.running > div {
    animation-play-state: running
  }
  ._direction_0 {
    animation-direction: normal;
  }
  ._direction_1 {
    animation-direction:  reverse;
  }
  ._direction_2 {
    animation-direction: alternate;
  }
  ._direction_3 {
    animation-direction:alternate-reverse;
  }
}
._play-state_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
  }
  ._play-state_0 {
    animation: 2s zuoyou linear infinite;
  }
  .running {
    animation-play-state: running
  }
  .paused {
    animation-play-state: paused
  }
}
._fill-mode_ {
  > div {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    background: blue;
    animation: 2s youbiandong linear 1 paused;
  }
  &.running > div {
    animation-play-state: running
  }
  ._fill-mode_0 {
    animation-fill-mode:none;
  }
  ._fill-mode_1 {
    animation-fill-mode:forwards;
  }
  ._fill-mode_2 {
    animation-fill-mode:backwards;
  }
}
@keyframes youbiandong {
  to {
    transform: translateX(400px);
  }
}
@keyframes zuoyou {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(400px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>