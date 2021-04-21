<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>
    <detail-image-info :detailInfo="detailInfo"></detail-image-info>
    </scroll>
  </div>
</template>

<script>
//子组件
import DetailNavBar from './childComps/detailNavBar/detailNavBar.vue'
import DetailSwiper from './childComps/detailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/detailShopInfo.vue'
import DetailImageInfo from './childComps/DetailImageInfo.vue'
//公用组件
import Scroll from '../../components/common/scroll/Scroll.vue'
//网络请求方法
import {getDetail,Goods} from 'network/detail'
export default {
components: {
DetailNavBar,
DetailSwiper,
DetailBaseInfo,
Scroll,
DetailShopInfo,
DetailImageInfo
  },
name:"detail",
data(){
  return{
    iid:null,
    topImages:[],
    goods:{},
    shopInfo:{},
    detailInfo:{}
  }
},
created(){
  this.iid=this.$route.query.iid
  getDetail(this.iid).then(res=>{
    const data = res.result;
    this.topImages=res.result.itemInfo.topImages;
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
    this.shopInfo = data.shopInfo;
    this.detailInfo = data.detailInfo
  })
}
}
</script>

<style scoped>
  .detail {
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 1;
  }
  .content{
    background-color: #fff;
    height: calc(100% - 44px);
  }
</style>