<template>
  <div id="funHome">
    <div class="head">
      <div class="logo">
        <div class="is_hover">
          <div class="logo_box"></div>
          <p>就是玩儿</p>
        </div>
        <div class="no_hover">
          <div class="logo_box"></div>
          <p>就是玩儿</p>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toRouter(name, id) {
      id
        ? this.$router.push({ name, params: { id } })
        : this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
//logo的点
@mixin point {
  content: "";
  width: 6px;
  height: 6px;
  background: #000;
  border-radius: 50%;
  position: absolute;
}

#funHome {
  min-height: 100vh;
  width: 100%;
  background: #000;
}
.head {
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  line-height: 50px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  padding: 0 20px;
  position: relative;
}
.is_hover,
.no_hover {
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
  cursor: pointer;
  .logo_box {
    margin-right: 20px;
    position: relative;
    width: 40px;
    height: 26px;
    border-radius: 4px;
    border: 3px solid #000;
    background: transparent;
    &::before {
      @include point;
      top: 4px;
      left: 4px;
    }
    &::after {
      @include point;
      bottom: 4px;
      right: 4px;
    }
  }

  p {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    background: #000;
    background-clip: text;
    background-image: -webkit-linear-gradient(left, transparent, transparent);
    -webkit-text-fill-color: transparent;
  }
}
.logo {
  .is_hover {
    opacity: 0;
  }
  .no_hover {
    opacity: 1;
  }

  &:hover {
    * {
      transition: all 0.4s;
    }
    .is_hover {
      opacity: 1;
      .logo_box {
        background: -webkit-linear-gradient(left top, #e7abe1, #efafa9);
      }
      p {
        background-image: -webkit-linear-gradient(left, #f24769, #8302bd);
      }
    }
    .no_hover {
      opacity: 0;
    }
  }
}
</style>