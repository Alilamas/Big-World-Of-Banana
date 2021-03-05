<template>
  <div id="illusionDetail">
    <div class="mach_bands">
      <div v-for="i in 6" :class="'band band_' + i" :key="i"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
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
// #illusionDetail {
// }
.mach_bands {
  position: relative;
  width: 800px;
  height: 400px;
  background: hsl(220, 100%, 39%);
  display: flex;
  // background: hsl(220,100%,39%);
}
.band {
  width: 80px;
  height: 70%;
  background: #fff;
  position: absolute;
  top: 15%;
  transition: all .3s
}
.band:first-child {
  border-radius: 10px 0 0 10px;
}
.band:last-child {
  border-radius: 0 10px 10px 0;
}
@for $i from 1 through 6 {
  .band_#{$i} {
    $color: darken(hsl(220, 100%, 39%), $i * 4 - 1);
    left: #{$i * 10}px;
    background: $color;
  }
}
</style>