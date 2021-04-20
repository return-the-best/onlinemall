.<template>
    <tab-bar>
    <tabbar-item path="/home">
      <template #item-icon><img src="~assets/img/tabbar/home.svg" alt="0"/></template>
      <template #item-text><div>首页</div></template>
    </tabbar-item>
    <tabbar-item path="/shopcart">
      <template #item-icon><img src="~assets/img/tabbar/shopcart.svg" alt="0"/></template>
      <template #item-text><div>购物车</div></template>
    </tabbar-item>
    <tabbar-item path="/category">
      <template #item-icon><img src="~assets/img/tabbar/category.svg" alt="0"/></template>
      <template #item-text><div>分类</div></template>
    </tabbar-item>
    <tabbar-item path="/profile">
      <template #item-icon><img src="~assets/img/tabbar/profile.svg" alt="0"/></template>
      <template #item-text><div>我的</div></template>
    </tabbar-item>
  </tab-bar>
</template>

<script>
export default {
    name:'MainTabBar',
  components:{
    tabBar,
    tabbarItem
  }
}
import tabBar from '@/components/common/tabbar/tabBar'
import tabbarItem from '@/components/common/tabbar/tabbarItem'
</script>

<style scoped>

</style>