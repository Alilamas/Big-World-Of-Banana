<template>
  <div class="scss-basic">
    <cssLogo/>
    <underLine/>
    <h5>皇帝的SCSS教程</h5>
    <p class="jiafa">测试加法</p>
    <div class="mixin extend"></div>
    <div class="test">测试mixin</div>
    <ul class="through">
      <h5>测试@for   through</h5>
      <li class="li li0">字体</li>
      <li class="li li1">字体</li>
      <li class="li li2">字体</li>
      <li class="li li3">字体</li>
      <li class="li li4">字体</li>
      <li class="li li5">字体</li>
    </ul>
    <ul class="to">
      <h5>测试@for   to</h5>
      <li class="li li0">字体</li>
      <li class="li li1">字体</li>
      <li class="li li2">字体</li>
      <li class="li li3">字体</li>
      <li class="li li4">字体</li>
      <li class="li li5">字体</li>
    </ul>
    <ul class="each">
      <h5>测试@each in</h5>
      <li class="li each0">适中的紫罗兰红色</li>
      <li class="li each1">查特酒绿</li>
      <li class="li each2">橙红色</li>
    </ul>
  </div>
</template>
<script>
import cssLogo from './components/css-logo'
import underLine from './components/under-line'
export default {
  components: {
    cssLogo,
    underLine
  }

}
</script>
<style lang="scss" scoped>
$height: 20px;
$width: 40px;
$h-2: 2 * $height;
$w-3: 3 * $height;
$color: #5ceb1a;
$blue: #00c1de;
$five: 5;
$tine: 10;

h5 {
  color: auto;
}
ul {
  h5 {
    display: inline-block;
    font-size:24px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #5ceb1a;
  }
}
.jiafa {
  width: $width * 10;
  height: $height * 2;
  //这里就是scss最近经典的嵌套和父元素选择器
  &:after {
    content: "这里是嵌套的加法测试\#\{$five + $tine\}等于：#{$five + $tine}";
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
  height: 50px;
  background: linear-gradient(pink, rgb(202, 77, 240), rgb(73, 100, 255));
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

//第二份
//scss支持6中数据类型
//数组：1, 2, 13, 10px
//字符串："foo", 'bar', baz
//颜色：blue, #04a3f9, rgba(255,0,0,0.5)
//布尔值：true, false
//空值：null
//数组：（用空格或逗号作分隔符）
//
// #{}将带引号的字符串转化为无引号字符串
//
@mixin test($color: pink, $px: 36, $border) {
  color: $color;
  font-size: #{$px}px;
  border: $border;
}
.test {
  @include test($border: 1px solid blue);
}
// @mixin test($color:null,$px:null {  //有些时候不想传很多，就把默认值设置为 null
//
// !default 这个很关键   scss的变量声明最好写在import前面
//                      然后公共的scss文件里面的变量最好写上!default
//@for $var from <start> through <end>和
//@for $var from <start> to <end>
li {
  color: red; //失效字样
}
.through {
  @for $i from 0 through 5 {
    .li#{$i} {
      color: ##{$i}#{$i * 2}#{$i * 3};
      font-size: $i * 8px;
      margin-bottom: 10px;
    }
  }
}
.to {
  @for $i from 0 to 5 {
    .li#{$i} {
      color: ##{$i}#{$i * 2}#{$i * 3};
      font-size: $i * 8px;
      margin-bottom: 10px;
    }
  }
}
//也就是说 through 是会包含<end>的数,而 to 不会
//
//@each $key, $value in的时候，@key可以直接写标签，也可以
.each {
  @each $header, $color in ('.each0': MediumVioletRed, '.each1': Chartreuse, '.each2': OrangeRed) {
    #{$header} {
      color: $color;
    }
  }
}


//第三份

//  about 注释
//  /*注释*/:这种注释会被保留到编译后的css文件中。
//  //注释:这种注释不会被保留到编译后生成的css文件中。

//  about 混合器（函数）
// @mixin name {
//      ...
// }
//  混合器作用域内的属性都是return的值，除此之外，还可以为函数传参数，也可以使用默认值（$color: red）或者 （$color:null）


//  第四份
//
//  移动端优先
.scss-basic { //先写移动端样式
  // Mobile code
    background: #000;
  @media (min-width: 960px) { //然后通过媒体查询，继续加入PC端样式
    // Desktop code
    background: #fff;
  }
}
//  因为自适应的原则就是从小变大，由简入繁，所以是以移动端为基础向PC端进行样式扩展的

//  提前写好常规代码
//  有很多代码基本上都是会通道的，比如 border-radius、 color、 font-weight、 font-size、 margin、
//  position、 flex、 各类居中，这样可以提升项目的可维护性

//  不要使用 ！important和 #id ！！！
//  原因很简单啊，这2个css的宣扬成绩太高了，很容易出现问题。
</style>