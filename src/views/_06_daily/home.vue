<template>
  <div>
    <nav>
      <Logo />
      <ul>
        <li></li>
      </ul>
    </nav>
    <router-view class="daliy_view"></router-view>
    <banana />
  </div>
</template>

<script>
import Logo from "./components/logo";
export default {
  components: {
    Logo,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.daliy_view {
  min-height: 600px;
}
nav {
  width: 100%;
  padding: 0 10px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: left;
  ul {
    display: flex;
    justify-content: left;
  }
}
</style>