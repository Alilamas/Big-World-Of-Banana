<template>
  <div id="illusionIndex">
    <ul>
      <li
        v-for="item in routerList"
        :key="item.id"
        @click="toRouter('illusionDetails', 1)"
      >
        {{ item.name }}
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
          id: 1,
          name: "马赫带"
        },
      ],
    };
  },
  methods: {
    toRouter(name, id) {
      id
        ? this.$router.push({ name, params: { id } })
        : this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  li {
    color: #fff;
    cursor: pointer;
  }
}
</style>