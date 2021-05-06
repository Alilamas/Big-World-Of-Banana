<template>
  <div id="funIndex">
    <ul>
      <li
        v-for="item in funList"
        :key="'f' + item.id"
        @click="toRouter(item.router)"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul>
      <li
        v-for="item in illusionList"
        :key="'i' + item.id"
        @click="toRouter('funDetails', 1)"
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
      funList: [
        {
          name: "斐波那契螺旋线",
          router:'Fn=F(n-1)+F(n-2)'
        },
      ],
      illusionList: [
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