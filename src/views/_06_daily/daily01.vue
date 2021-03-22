<template>
  <div>
    <nav>DALIY的home页</nav>
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

