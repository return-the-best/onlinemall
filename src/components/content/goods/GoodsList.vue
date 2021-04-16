<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name:"GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>

</style>