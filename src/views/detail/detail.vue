<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>
    <detail-image-info :detailInfo="detailInfo"></detail-image-info>
    <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends"/>
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
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
//公用组件
import Scroll from '../../components/common/scroll/Scroll.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
//网络请求方法
import {getDetail,Goods,GoodsParam,getRecommend} from 'network/detail'
export default {
name:"detail",

components: {
DetailNavBar,
DetailSwiper,
DetailBaseInfo,
Scroll,
DetailShopInfo,
DetailImageInfo,
DetailParamInfo,
DetailCommentInfo,
GoodsList
  },

data(){
  return{
    iid:'',
    topImages:[],
    goods:{},
    shopInfo:{},
    detailInfo:{},
    paramInfo:{},
    recommends:[],
    commentInfo:{}
  }
},

created(){
  this.iid=this.$route.query.iid
  getDetail(this.iid).then(res=>{
    const data = res.result;
    this.topImages=res.result.itemInfo.topImages;
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
    this.shopInfo = data.shopInfo;
    this.detailInfo = data.detailInfo;
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
    if(data.rate.list){
      this.commentInfo=data.rate.list[0];
    }
  })
  getRecommend().then(res=>{
    this.recommends=res.data.list
  })
}
}
</script>

<style scoped>
  .detail {
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 10;
  }
  .content{
    background-color: #fff;
    height: calc(100% - 44px);
  }
</style>