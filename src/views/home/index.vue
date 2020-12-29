<template>
  <div class="" id="home">
    <h1>香蕉大世界</h1>
    <h2>CSS大狂欢</h2>
    <ul>
      <li v-for="(item, index) in routerList" :key="index">
        <router-link :to="{ name: item.router }">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerList: [
        {
          name: "设计",
          router: "poster",
        },
        {
          name: "六边形",
          router: "graphical",
        },
        {
          name: "视觉错觉",
          router: "illusion",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>