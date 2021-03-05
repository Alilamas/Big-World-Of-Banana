<template>
  <div class="home" id="home">
    <div class="test"><div></div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>

.test {
  height: 500px;
  div{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    box-shadow: inset 100px 0 0 rgba(209, 242, 165, 0.4),
   inset 50px 50px 0 rgba(228, 243, 143, 0.4),
				inset 0 100px 0 rgba(239, 250, 180, 0.4),
   inset -50px 50px 0 rgba(243, 143, 143, 0.4),
				inset -100px 0 0 rgba(255, 196, 140, 0.4),	
   inset 50px -50px 0 rgba(143, 158, 243, 0.4),
				inset 0 -100px 0 rgba(245, 105, 145, 0.4);
  }
}
</style>