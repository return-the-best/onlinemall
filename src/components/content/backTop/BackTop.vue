<template>
  <div class="back-top" @click="backClick">
    <img src="~assets/img/common/top.png"/>
  </div>
</template>

<script>
export default {
  name:"BackTop",
  methods:{
    backClick(){
      this.$emit("backClick")
    }
  }
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 55px;
  }
  .back-top img {
    width: 50px;
    height: 50px;
  }
</style>