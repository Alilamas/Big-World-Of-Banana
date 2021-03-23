<template>
  <div>
    <nav>
      <Logo />
      <ul>
        <li
          v-for="(li, index) in love"
          :key="index"
          @click="pushRouter(li.name)"
        >{{ li.title }}
          
        </li>
      </ul>
    </nav>
    <router-view class="daliy_view"></router-view>
    <banana />
  </div>
</template>

<script>
import Logo from "./components/logo";
import Daily from "@/router/modules/daily"; //每日情话
export default {
  components: {
    Logo,
  },
  data() {
    return {
      love: [],
    };
  },
  mounted() {
    let reg = /daily/;
    let router = Daily[0].children;
    for (let i = 0; i < router.length; i++) {
      if (reg.test(router[i].path)) {
        const params = {
          name: router[i].name,
          title: router[i].meta.title,
        };
        this.love.push(params);
      }
    }
  },
  methods: {
    pushRouter(name) {
      this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
$size: 14px;
$li__width: $size * 1.2;
$li__lh: $size * 1.4;
//
//
.daliy_view {
  min-height: 600px;
}
nav {
  width: 100%;
  padding: 0 15px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: left;
  ul {
    display: flex;
    justify-content: left;
    padding: 0 20px;
    li {
      cursor: pointer;
      padding: 10px 8px;
      font-size: $size;
      width: $li__width;
      line-height: $li__lh;
      background: #fff;
      background-clip: text;
      background-image: -webkit-linear-gradient(left, transparent, transparent);
      -webkit-text-fill-color: transparent;
      // color: #fff;
      // border-left: 1px solid #ffffff88;
    }
  }
}
</style>