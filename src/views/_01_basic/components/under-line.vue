<template>
  <div class="under-line">
    <p>Banana</p>
  </div>
</template>
<style lang="scss" scoped>
$color: #00c1de;
@mixin after {
  content: "";
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  height: 3px;
  /* border-radius: 2px; */
  background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, $color 76.05%);
}
.under-line {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999999;
  border: 1px solid #fff;
  cursor: pointer;
  p {
    position: relative;
    &::after {
      @include after;
    }
  }
  &:hover {
    border: 1px solid $color;
    p {
      color: $color;
    }
    p::after {
      background: $color;
    }
  }
}
</style>