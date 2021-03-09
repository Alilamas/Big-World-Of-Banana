<template>
  <div id="basicHome">
    <nav>
      <ul>
        <li @click="pushRouter('graphical')">图形graphical</li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
#basicHome {
  background: linear-gradient(to right,#acacac, #eaeaea);
  width: 100%;
  min-height: 100vh;
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  ul {
    display: flex;
    li {
    }
  }
}
</style>