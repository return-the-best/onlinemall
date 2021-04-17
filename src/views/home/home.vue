<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
  //项目组件
  import HomeSwiper from './childComps/HomeSwiper';//首页轮播图
  import RecommendView from './childComps/RecommendView';//首页推荐
  import FeatureView from './childComps/FeatureView.vue';//时尚
  import GoodsList from 'components/content/goods/GoodsList.vue';//商品列表
  import TabControl from 'components/content/tabControl/tabControl.vue';//分类栏
  //公共组件
  import NavBar from 'components/common/navbar/NavBar';//导航栏
  import Scroll from 'components/common/scroll/Scroll.vue';//better-scroll
  import BackTop from 'components/content/backTop/BackTop.vue';//回到顶部
  //方法
  import {
    getHomeMultidata,
    getHomeGoods,
    } from "network/home";//axios实例
export default {
  name:"home",
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop'
    }
  },
  created(){
    //获取首页数据
    this.getHomeMultidata()
    //获取商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    //事件监听方法
    tabClick(index){
      this.currentType=Object.keys(this.goods)[index]
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    //网络请求方法
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].list.page+=1
    })
    },
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
.content{
  height: 500px;
  overflow: hidden;
}
</style>