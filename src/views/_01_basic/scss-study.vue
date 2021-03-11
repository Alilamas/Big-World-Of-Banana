<template>
  <div class="scss-basic">
    <h5>皇帝的SCSS教程</h5>
    <p class="jiafa">测试加法</p>
    <div class="mixin extend"></div>
  </div>
</template>
<style lang="scss" scoped>
$height: 20px;
$width: 40px;
$h-2: 2*$height;
$w-3: 3*$height;
$color: #5ceb1a;
$blue: #00c1de;
$five:5;
$tine:10;

h5 {
  color: auto;
}
.jiafa{
  width: $width*10;
  height: $height*2;
  //这里就是scss最近经典的嵌套和父元素选择器
  &:after{
    content: '这里是嵌套的加法测试\#\{$five + $tine\}等于：#{$five + $tine}'
  }
}

// /* --------------------SCSS---------------- */
// .funky {
//   font: {
//     family: fantasy;
//     size: 30em;
//     weight: bold;
//   }
// }
// /* --------------------CSS---------------- */
// .funky {
//   font-family: fantasy;
//   font-size: 30em;
//   font-weight: bold; 
// }

//混合（Mixin）
//定义
@mixin fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
}
//应用
.mixin {
  width: 100%;
  height: 30px;
  background: linear-gradient(pink,rgb(202, 77, 240),rgb(73, 100, 255));
  @include fixed-bottom;
}
//继承（%）
//定义
%border-top {
  border-top: 5px solid #00c1de;
}
//使用
.mixin {
  @extend %border-top;
}
.extend {
  @extend %border-top;
}
</style>