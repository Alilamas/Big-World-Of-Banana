<template>
  <div class="helloAnimation">
    <div
      :class="hello ? '' : 'helloHidden'"
      class="hello"
      @click="hello = false"
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.1,-21.7C27.9,-14.3,34.5,-7.1,36.1,1.7C37.8,10.4,34.5,20.9,27.7,27.6C20.9,34.3,10.4,37.4,1.6,35.7C-7.2,34.1,-14.4,27.9,-19.6,21.1C-24.8,14.4,-27.9,7.2,-28.4,-0.5C-28.8,-8.1,-26.6,-16.2,-21.4,-23.6C-16.2,-31.1,-8.1,-37.8,-0.5,-37.3C7.1,-36.8,14.3,-29.1,21.1,-21.7Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30,-28.9C37.3,-22.7,40.6,-11.4,38.4,-2.1C36.3,7.2,28.9,14.3,21.6,21.2C14.3,28.1,7.2,34.7,-0.2,34.9C-7.5,35,-15,28.7,-20.2,21.9C-25.4,15,-28.3,7.5,-30.1,-1.8C-31.9,-11.2,-32.7,-22.3,-27.5,-28.4C-22.3,-34.6,-11.2,-35.6,0.1,-35.8C11.4,-35.9,22.7,-35,30,-28.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
        ></path>
      </svg>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24,-23C29.9,-18,32.8,-9,32.1,-0.7C31.4,7.6,27,15.2,21.1,20.5C15.2,25.9,7.6,29.1,-0.4,29.5C-8.4,29.9,-16.7,27.5,-23,22.1C-29.3,16.7,-33.5,8.4,-33.2,0.3C-33,-7.9,-28.3,-15.7,-22,-20.6C-15.7,-25.6,-7.9,-27.5,0.6,-28.1C9,-28.7,18,-27.9,24,-23Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
        ></path>
      </svg>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.6,-19.3C26.9,-14.4,32.3,-7.2,32.9,0.6C33.5,8.4,29.3,16.8,23,24.1C16.8,31.5,8.4,37.9,0.4,37.5C-7.7,37.1,-15.3,30,-22.4,22.7C-29.4,15.3,-35.9,7.7,-36.4,-0.5C-37,-8.7,-31.5,-17.4,-24.5,-22.4C-17.4,-27.3,-8.7,-28.5,-0.8,-27.7C7.2,-27,14.4,-24.3,20.6,-19.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <h1>WELCOME</h1>
    </div>
    <div class="nav">
      <div
        class="transform"
        :class="longIndex == 0 ? 'long' : ''"
        @click="click('transform')"
      >
        <h5>transform</h5>
      </div>
      <div
        class="animation"
        :class="longIndex == 1 ? 'long' : ''"
        @click="click('animation')"
      >
        <h5>transiton</h5>
        <h5>animation</h5>
        <div class="canvas">
          <div calss="canvas__console"></div>
          <div class="canvas__main">
            <div class="item" v-for="item in 30" :key="100 + item">
              <div v-for="i in 6" :key="1000 + i"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <banana />
  </div>
</template>
<script>
export default {
  data() {
    return {
      hello: true,
      canvas__magic: false,
      longIndex: null,
      lineList: [
        {
          name: "HTML",
          router: "html",
        },
        {
          name: "CSS",
          router: "css",
        },
        {
          name: "animation",
          router: "helloAnimation",
        },
        {
          name: "SCSS",
          router: "scss-study",
        },
      ],
    };
  },
  methods: {
    pushRouter(name) {
      this.$router.push({ name });
    },
    click(name) {
      name == "transform"
        ? this.longIndex == 0
          ? this.pushRouter(name)
          : (this.longIndex = 0)
        : this.longIndex == 1
        ? this.pushRouter(name)
        : (this.longIndex = 1);
    },
  },
};
</script>
<style lang="scss" scoped>
$shadow-size: 5px;
.nav {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  z-index: 103;
  > div {
    width: 100%;
    height: 50%;
    cursor: pointer;
    overflow: hidden;
    &.long {
      height: 100%;
      transition: all 0.5s;
    }
  }
  .transform {
    position: relative;
    background: #000;
    h5 {
      position: absolute;
      color: #fff;
      top: 10px;
    }
  }
  //动画部分
  .animation {
    background: radial-gradient(#ffffff 15%, #b9b9b9 100%);
    transition: all 0.5s;
    position: relative;
    h5 {
      position: absolute;
      &:nth-child(1) {
        top: 10px;
      }
      &:nth-child(2) {
        top: 40px;
      }
    }
    .canvas {
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
          150deg,
          rgba(255, 255, 255, 0) 0,
          rgba(255, 255, 255, 0) 49px,
          rgba(0, 0, 0, 0.1) 50px,
          rgba(255, 255, 255, 0) 51px
        ),
        repeating-linear-gradient(
          31deg,
          rgba(255, 255, 255, 0) 0,
          rgba(255, 255, 255, 0) 49px,
          rgba(0, 0, 0, 0.1) 50px,
          rgba(255, 255, 255, 0) 51px
        );
      &__main {
        width: 100%;
        height: 100%;
        filter: hue-rotate(0deg);
        transition: all 1s ease 0s;
        .item {
          position: relative;
          width: 150px;
          height: 150px;
          transform-style: preserve-3d;
          transform: rotateX(-35deg) rotateY(45deg);
          transition: transform 0.5s ease 0s;
          animation: itemRotate 4s 0.05s infinite;
          transform-origin: center center;
          > div {
            position: absolute;
            width: 150px;
            height: 150px;
            background: #ff5500;
            box-shadow: 0 0 5px -3px #00000030 inset;
            transition: all 1.5s ease-in-out;
          }
          > div:nth-child(2) {
            transform: rotateX(90deg) translate3d(0px, 7px, 7px);
            background: #ffa116;
            height: 14px;
          }
          > div:nth-child(3) {
            transform: rotateX(0deg) translate3d(0, 0, 14px);
          }
          > div:nth-child(4) {
            transform: rotateX(270deg) translate3d(0px, -7px, 143px);
            background: #ffa116;
            height: 14px;
          }
          > div:nth-child(5) {
            transform: rotateY(90deg) translate3d(-7px, 0, 143px);
            background: #e04b00;
            width: 14px;
          }
          > div:nth-child(6) {
            transform: rotateY(-90deg) translate3d(7px, 0, 7px);
            background: #e04b00;
            width: 14px;
          }
        }
        @for $i from 1 through 30 {
          .item:nth-child(#{$i}) {
            left: calc(55% - 10px * #{$i});
            top: calc(55% - 156px * #{$i - 1});
            animation-delay: #{(($i - 1) * 0.05)}s;
            z-index: calc(100 + 30 - #{$i});
            > div {
              filter: hue-rotate(0deg)
                brightness(calc(1.95 - #{$i * 0.05}))
                saturate(1.5);
            }
          }
        }
      }
    }
    &:hover {
      @for $i from 1 through 30 {
        .item:nth-child(#{$i}) {
          > div {
            filter: hue-rotate(#{$i * 10 - 10}deg)
              brightness(1.35)
              saturate(1.25);
          }
        }
      }
    }
  }
}
@keyframes itemRotate {
  0% {
    transform: rotateX(-35deg) rotateY(45deg);
  }
  20% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(0deg);
  }
  30% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(115deg);
  }
  40% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(-10deg);
  }
  50% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(5deg);
  }
  60% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(-3deg);
  }
  70% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(2deg);
  }
  80% {
    transform: rotateX(-35deg) rotateY(45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-35deg) rotateY(45deg);
  }
}
//
.hello {
  background: #333333;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  left: 0;
  z-index: 200;
}
.helloHidden {
  opacity: 0;
  transition: 1s ease-in-out;
  z-index: 10;
}
svg {
  width: 30%;
  animation: rotate infinite linear;
  mix-blend-mode: hard-light;
  margin: 0 -8%;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
h1 {
  position: absolute;
  font-size: 10vw;
  text-transform: uppercase;
  font-weight: 900;
  color: white;
  letter-spacing: 0.5em;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: blingbling 1s infinite;
  mix-blend-mode: screen;
}
@keyframes blingbling {
  0% {
    text-shadow: $shadow-size 0px 0px tomato;
  }
  10% {
    text-shadow: -$shadow-size -$shadow-size 0px gold;
  }
  20% {
    text-shadow: $shadow-size 0px 0px lime;
  }
  30% {
    text-shadow: $shadow-size 0px 0px turquoise;
  }
  40% {
    text-shadow: $shadow-size $shadow-size 0px tomato;
  }
  50% {
    text-shadow: 0px -$shadow-size 0px gold;
  }
  60% {
    text-shadow: 0px $shadow-size 0px lime;
  }
  70% {
    text-shadow: $shadow-size 0px 0px turquoise;
  }
  80% {
    text-shadow: $shadow-size -10px 0px tomato;
  }
  90% {
    text-shadow: $shadow-size $shadow-size 0px gold;
  }
  100% {
    text-shadow: $shadow-size 0px 0px lime;
  }
}
@each $index, $color, $time, $direvtion in ("1", tomato, 4s, normal),
  ("2", gold, 2s, normal), ("3", lime, 6s, reverse),
  ("4", turquoise, 3s, reverse)
{
  svg:nth-child(#{$index}) {
    fill: $color;
    animation-duration: $time;
    animation-direction: $direvtion;
  }
}
</style>