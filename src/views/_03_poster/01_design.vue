<template>
  <div class="poster _01_design">
    <div class="design shoot">
      <p>1、每一个div的渐变</p>
      <p>2、从右侧堆叠到显示字样的过程</p>
      <div
        v-for="(rows, index) in shoot"
        :key="index"
        :class="'rows r' + (index + 1)"
      >
        <div
          v-for="columns in rows"
          :class="'c' + columns"
          :key="columns"
        ></div>
      </div>
    </div>
    <div class="info"></div>
    <div class="design chicken">
      <div
        v-for="(rows, index) in chicken"
        :key="index"
        :class="'rows r' + (index + 1)"
      >
        <div
          v-for="columns in rows"
          :class="'c' + columns"
          :key="columns"
        ></div>
      </div>
    </div>
    <div class="info"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoot: [
        [1, 2, 3, 6, 7, 8],
        [1, 2, 3, 6, 8],
        [2, 3, 10],
        [1, 2, 3, 5, 9, 10],
        [2, 3, 9],
        [6, 9],
        [1, 2, 3, 6, 9],
        [1, 4, 7, 8],
        [1, 3, 4, 7, 8],
        [1, 6, 9, 10],
      ],
      chicken: [
        [1, 2, 3, 4, 8],
        [1, 2, 3, 4, 8],
        [8],
        [1, 2, 3, 4, 6, 7, 8, 9, 10],
        [2, 3, 8],
        [2, 3, 4, 8],
        [1, 2, 3, 4, 8],
        [1, 8],
        [1, 2, 3, 4, 8],
        [1, 8],
      ],
    };
  },
  methods: {},
};
</script>
<style lang="sass" scoped>
@import "@/assets/poster/01_design.scss"
</style>
<style lang="scss" scoped>
.poster {
  width: 100vw;
  min-height: 100vh;
}
._01_design {
  background: #e1e1e1;
}
.design {
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(
    1,
    1fr
  ); // 等于repeat(10, 50px) 亦等于 repeat(10, 10%) 且约等于 repeat(auto-fill, 50px)
  grid-template-rows: repeat(10, 1fr);
  // gap: 10px 10px;  // grid-gap: <grid-row-gap> <grid-column-gap>;
  .rows {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(1, 1fr);
    div {
      background: url('/static/hot_pixel_2.jpg') no-repeat center;
      position: relative;
    }
  }
  @for $i from 1 through 10 {
    .c#{$i} {
      grid-column-start: $i;
      grid-column-end: $i + 1;
    }
  }
}
</style>