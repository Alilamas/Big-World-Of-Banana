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
          <li v-for="i in transitionList" :key="`t-${i}`">{{ i }}</li>
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
          <li v-for="a in animationList" :key="`a-${a}`">{{ a }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "css-doodle";
export default {
  data() {
    return {
      hidden: null,
      transitionList: ["-property", "-duration", "-timing-function", "-delay"],
      animationList: [
        "-name",
        "-duration",
        "-timing-function",
        "-delay",
        "-iteration-count",
        "-direction",
        "-play-state",
        "-fill-mode",
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
  display: flex;
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
  > div {
    width: 50%;
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
  .title {
    padding-right: 10px;
    text-align: right;
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
  .title {
    padding-left: 10px;
    text-align: left;
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
</style>