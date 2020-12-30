<template>
  <div id="webpPage">
    <ul>
      <li
        v-for="item in neumorphismList"
        :key="item.id"
        @click="toRouter('webpPageDetails', item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul>
      <li
        v-for="item in glassmorphismList"
        :key="item.id"
        @click="toRouter('webpPageDetails', item.id)"
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
      neumorphismList: [
        {
          id: 1,
          name: "麒麟物通卡"
        }
      ],
      glassmorphismList: [
        {
          id: 2,
          name: "麒麟卡"
        }
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