<template>
  <div id="basicIndex">
    <css-doodle>
      :doodle { @grid: 20 / 100vmax; background: #0a0c27; font-family:
      sans-serif; overflow: hidden; } :after { content: \@hex.@r(0x2500,
      0x257f); color: hsla(@r360, 70%, 70%, @r.9); font-size: 8vmin; }
    </css-doodle>
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
import "css-doodle";
export default {
  data() {
    return {
      lineList: [
        {
          name: "HTML",
          router: "html",
        },
        {
          name: "CSS & JS",
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
$line3color: #53aafd;
$line3colorOther: rgb(167, 203, 236);
$line4color: #a7d4a7;
$line4colorOther: #e4eee4;
#basicIndex {
  width: 100vw;
  height: 100vh;
  background: #393535;
  overflow: hidden;
}
css-doodle {
  width: 100vw;
  height: 100vh;
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
  @each $index, $bg in (1: #dd7951, 2: #c4bdab, 3: $line3color, 4: $line4color)
  {
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
  .line2,
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
  .line2:hover {
    background-color: #556;
    background-image: linear-gradient(
        30deg,
        #445 12%,
        transparent 12.5%,
        transparent 87%,
        #445 87.5%,
        #445
      ),
      linear-gradient(
        150deg,
        #445 12%,
        transparent 12.5%,
        transparent 87%,
        #445 87.5%,
        #445
      ),
      linear-gradient(
        30deg,
        #445 12%,
        transparent 12.5%,
        transparent 87%,
        #445 87.5%,
        #445
      ),
      linear-gradient(
        150deg,
        #445 12%,
        transparent 12.5%,
        transparent 87%,
        #445 87.5%,
        #445
      ),
      linear-gradient(
        60deg,
        #99a 25%,
        transparent 25.5%,
        transparent 75%,
        #99a 75%,
        #99a
      ),
      linear-gradient(
        60deg,
        #99a 25%,
        transparent 25.5%,
        transparent 75%,
        #99a 75%,
        #99a
      );
    background-size: 80px 140px;
    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
  }
  .line3:hover {
    background: radial-gradient(
        circle,
        transparent 20%,
        $line3color 20%,
        $line3color 80%,
        transparent 80%,
        transparent
      ),
      radial-gradient(
          circle,
          transparent 20%,
          $line3color 20%,
          $line3color 80%,
          transparent 80%,
          transparent
        )
        50px 50px,
      linear-gradient($line3colorOther 8px, transparent 8px) 0 -4px,
      linear-gradient(90deg, $line3colorOther 8px, transparent 8px) -4px 0;
    background-color: $line3color;
    background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
    transition: height 0.5s cubic-bezier(1, 1.57, 0, 0.74);
  }
  .line4:hover {
    background: linear-gradient(
        135deg,
        $line4color 21px,
        $line4colorOther 22px,
        $line4colorOther 24px,
        transparent 24px,
        transparent 67px,
        $line4colorOther 67px,
        $line4colorOther 69px,
        transparent 69px
      ),
      linear-gradient(
          225deg,
          $line4color 21px,
          $line4colorOther 22px,
          $line4colorOther 24px,
          transparent 24px,
          transparent 67px,
          $line4colorOther 67px,
          $line4colorOther 69px,
          transparent 69px
        )
        0 64px;
    background-color: $line4color;
    background-size: 64px 128px;
  }
}
</style>