<template>
  <div id="webpPage">
    <ul>
      <li
        v-for="item in funList"
        :key="item.id"
        @click="toRouter('webpPageDetails', item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul>
      <li
        v-for="item in paperList"
        :key="item.id"
        @click="toRouter('webpPageDetails', item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
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
      funList: [
        {
          id: 'haveFUN',
          name: "haveFUN"
        },
        {
          id: 2021,
          name: "hello,2021"
        },
        {
          id: 'bszh',
          name: "不说簪花"
        }
      ],
      paperList: [
        {
          id: 'bc1',
          name: "名片-纸质-暗色"
        },
      ],
      neumorphismList: [
        {
          id: 1,
          name: "麒麟-参会证"
        }
      ],
      glassmorphismList: [
        {
          id: 2,
          name: "麒麟计划-ID"
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