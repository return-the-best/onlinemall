.<template>
    <tab-bar>
    <tabbar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="0"/>
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/shopcart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="0"/>
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="0"/>
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="0"/>
      <div slot="item-text">我的</div>
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

<style>

</style>