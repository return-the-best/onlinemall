<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>
    <detail-image-info :detailInfo="detailInfo"></detail-image-info>
    <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
    <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
    <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBacktop"></back-top>
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
import DetailBottomBar from './childComps/DetailBottomBar.vue'
//公用组件
import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
//网络请求方法
import {getDetail,Goods,GoodsParam,getRecommend} from 'network/detail'
//混入
import{backTopMixin} from 'common/mixin.js'
export default {
name:"detail",

mixins:[backTopMixin],

components: {
DetailNavBar,
DetailSwiper,
DetailBaseInfo,
Scroll,
DetailShopInfo,
DetailImageInfo,
DetailParamInfo,
DetailCommentInfo,
GoodsList,
DetailBottomBar,
BackTop
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
    commentInfo:{},
    themeTopYs:[],
    currentIndex:0
  }
},

methods:{
  titleClick(index){
    this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
  },//点击标题
  contentScroll(position){
    const positionY=-position.y
    for(let i in this.themeTopYs){
      if(this.currentIndex!=i){
        if(parseInt(i)==this.themeTopYs.length-1&&positionY>this.themeTopYs[this.themeTopYs.length-1]||positionY>this.themeTopYs[parseInt(i)]&&positionY<this.themeTopYs[parseInt(i)+1])
        {
        this.currentIndex=parseInt(i)
        this.$refs.nav.currentIndex=this.currentIndex
      }
      }
    }
    this.isShowBacktop=(-position.y>1000)
  },//监听滚动
  addToCart(){
    const product={}
    product.image=this.topImages[0]
    product.title=this.goods.title
    product.desc=this.goods.desc
    product.price=this.goods.newPrice
    product.iid=this.iid
    this.$store.dispatch('addToCart',product)
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
},

updated(){
    this.themeTopYs=[]
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.param.$el.offsetTop)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
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
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
</style>