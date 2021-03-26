<template>
  <div class="helloAnimation">
    <div class="magic">
      <div class="magic__box">
        <div class="magic__text">
          <h5>HTML<b>&</b>CSS</h5>
          <P>besign and bulid website</P>
        </div>
        <div class="magic__line">
          <div
            v-for="(line, index) in lineList"
            :class="`line line${index + 1}`"
            :key="index"
            @click="pushRouter(line.router)"
          >
            <p>{{ line.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  },
};
</script>
<style lang="scss" scoped>
$width: 200px;
$height: 40px;
$margin: $width - $height;

.helloAnimation {
  width: 100vw;
  height: 100vh;
  background: #393535;
}
.magic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  &__box {
    width: 100%;
    height: 100%;
    position: relative;
  }
  &__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h5 {
      color: #fff;
      font-size: 40px;
      margin-bottom: 6px;
      b {
        color: #dd7a52;
      }
    }
    p {
      color: #fff;
      font-size: 16px;
    }
  }
  &__line {
    position: absolute;
    bottom: 50%;
    left: 50%;
  }
  .line {
    width: $width * 2;
    height: $height;
    background: red;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: 0 100%;
    overflow: hidden;
    p {
      font-family: "Pacifico";
      color: transparent;
      font-size: 40px;
    }
  }
  .line1 {
    z-index: 15;
  }
  @each $index, $bg in (1: #dd7951, 2: #c4bdab, 3: #53aafd, 4: #a7d4a7) {
    .line#{$index} {
      background: $bg;
      transform: rotate(#{($index) * 90 - 45}deg)
        translateX(-50%)
        translateY(-$margin);
      opacity: 0.9;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        z-index: 15;
        transition: height 0.5s ease-in-out;
        cursor: pointer;
        opacity: 1;
        p {
          transform: rotate(-#{($index) * 90 - 45}deg);
        }
      }
    }
  }
  .line3,
  .line4 {
    &:hover {
      height: $width;
      p {
        transition: color 0.5s ease-in-out;
        color: #fff;
        line-height: $width;
      }
    }
  }
  .line3:hover {
    transition: height 0.5s cubic-bezier(1, 1.57, 0, 0.74);
  }
}
</style>