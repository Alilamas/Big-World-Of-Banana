<template>
  <div class="imageReading" id="imageReading">
    <div class="baseMap">
      <img :src="img" class="image1" />
    </div>
    <div class="imgUpload">
      <input
        id="test"
        @onload="imageUpload"
        type="file"
        ref="input"
        accept="image/*"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: "",
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.baseMap {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 800px;
  background: #aaa;
}
.imgUpload {
  width: 100px;
  // width: 0px;
  height: 40px;
  position: fixed;
  z-index: 99px;
  right: 0px;
  top: 60px;
  border-radius: 4px 0 0 4px;
  border-right: 6px solid #41a73e;
  &__base {
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: white;
    background: -webkit-linear-gradient(
      right top,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(3px);
    box-shadow: 10px 0px 20px rgb(0 0 0 / 20%);
    cursor: pointer;
  }
  &:hover {
    width: 100px;
    border-right: 3px solid #41a73e;
    transition: all 0.5s;
  }
}
</style>