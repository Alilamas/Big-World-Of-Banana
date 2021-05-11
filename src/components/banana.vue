<template>
  <div>
    <div class="banana-logo" @click="pushRouter('home')">Banana</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    pushRouter(name, id) {
      id
        ? this.$router.push({ name, params: { id } })
        : this.$router.push({ name });
    },
  },
};
</script>
<style lang="scss" scoped>
.banana-logo {
  position: fixed;
  right: 20px;
  bottom: 20px;
  font-size: 20px;
  color: #999;
  font-weight: 300;
  font-family: "PoiretOne";
  z-index: 9999;
  cursor: pointer;
}
</style>