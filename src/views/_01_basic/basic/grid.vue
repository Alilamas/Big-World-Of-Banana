<template>
  <div id="grid">
    <div class="intro">
      <h5>什么是grid</h5>
      <p>Flex布局是轴线布局，是一位不具，Grid局部，是行列，典型的二维布局</p>
    </div>
    <div class="study_1">
      <p>grid里面有2个概念，容器和项目，也就是container和items</p>
      <h5>总概念</h5>
      <ul>
        <li>容器（container）</li>
        <li>项目（item）</li>
        <li>行（row）</li>
        <li>列（column）</li>
        <li>区域（area）</li>
        <li>内容（content）</li>
        <li>间距（gap）</li>
        <li>网格线（column lines）</li>
      </ul>
      <h5>容器属性</h5>
      <ul>
        <li>1、grid-template-columns</li>
        <li>2、grid-template-rows</li>
        <li>3、grid-row-gaps</li>
        <li>4、grid-columns</li>
        <li>5、grid-gap（3和4的简写）</li>
        <li>6、grid-template-areas</li>
        <li>7、grid-auto-flow</li>
        <li>8、justify-items</li>
        <li>9、align-items</li>
        <li>10、place-items（8和9的简写）</li>
        <li>11、place-content</li>
        <li>12、justify-content</li>
        <li>13、align-content（11和12的简写）</li>
        <li>14、grid-auto-columns</li>
        <li>15、grid-auto-rows</li>
      </ul>
    </div>

    <div class="study_2">
      <ul>
        <h5>grid-template-*</h5>
        <li>你想要多少行和列就自己写</li>
        <div class='magic magic1'>
          <div v-for='i in 10' :class="`item item-${i}`" :key='`magic1-${i}`'>{{i}}</div>
        </div>
      </ul>
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
#grid {
  background: #323442;
  min-height: 100vh;
  color: #fff;
}
.magic {
  display:grid;
  width: 600px;
  height: 600px;
  border: 10px solid skyblue;
  .item {
    width: 100px;
    height: 100px;
    background: #fff;
    color: black;
  }
}
</style>