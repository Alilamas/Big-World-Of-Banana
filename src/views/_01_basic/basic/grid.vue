<template>
  <div>
    <div class="test">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.test {
  display:grid;
  > div {
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
}
</style>