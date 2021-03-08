<template>
  <div id="_38">
    <div class="box">
      <div class="line"></div>
      <p class="h51">妇女节</p>
      <p class="h52">世界因你们而更加美丽</p>
      <p class="twd">The women`s Day</p>
      <p class="h3">3</p>
      <p class="h8">8</p>
      <ul>
        <li>做</li>
        <li>自</li>
        <li>己</li>
        <li>的</li>
        <li>女</li>
        <li>王</li>
      </ul>
    </div>
    <banana/>
  </div>
</template>
<style lang="scss" scoped>
#_38 {
  width: 100vw;
  height: 100vh;
  background: url("/static/poster/_38.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  position: relative;
  width: 400px;
  height: 800px;
  border: 3px solid #aaaaaa77;
  border-radius: 24px;
  box-shadow: 0 0 5px #aaaaaa66;
  * {
    color: #fff;
  }
  .line {
    width: 2px;height: 20px;background: #fff;position: absolute;
    left: 67px;
    top: 41px;
  }
  .h51 {
    font-size: 80px;
    width: 80px;
    line-height: 80px;
    font-family: "宋体";
    position: absolute;
    top: 106px;
    left: 10px;
  }
  .h52 {
    font-size: 14px;
    width: 14px;
    line-height: 22px;
    position: absolute;
    top: 229px;
    left: 99px;
  }
  .h3,.h8 {
    font-size: 60px;
    position: absolute;
    font-weight: 100;
    font-family: "PoiretOne";
  }
  .h3 {
    top: 160px;
    left: 99px;
  }
  .h8 {
    top: 190px;
    left: 131px;
  }
  .twd {
    font-size: 48px;
    position: absolute;
    bottom: 200px;
    left: 60px;
    font-weight: 100;
    font-family: "Allura";
    transform: skewY(-11deg);
  }
  ul {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    li {
      border-right: 1px solid #fff;
      padding: 0 20px;
    }
    li:last-child {
      border-right: none;
    }
  }
}
</style>