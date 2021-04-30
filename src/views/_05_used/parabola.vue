<template>
  <div class="hover">
    <div class="a">
      <div class="b"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.a,.b {
  display:inline-block;
}
.b {
  width: 8px;
  height: 8px;background: #000;
  border-radius:50%;
}
.hover {
  height: 500px;
  background: #cccccc88;
  cursor: pointer;
}
.hover:hover {
  .a {
    transform: translateX(400px);
    transition: 0.7s all linear;
  }
  .b {
    transform: translateY(400px);
    transition: 0.7s all cubic-bezier(0,1.02,.31,.99);
  }
}
</style>

