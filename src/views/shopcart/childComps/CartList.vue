<template>
<div class="cart-list">
<scroll ref="scroll" class="content">
      <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"/>
</scroll>
</div>
</template>

<script>
import{mapGetters}from'vuex'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem, Scroll },
  name:"CartList",
  activated(){
    this.$refs.scroll.refresh()
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>