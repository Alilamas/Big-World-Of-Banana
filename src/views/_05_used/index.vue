<template>
  <div>
    <nav>USED的home页</nav>
    <ul>
      <li @click="pushRouter('kycup')">kycup</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    pushRouter(name){
      this.$router.push({ name })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>