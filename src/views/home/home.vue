<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper'
  import {getHomeMultidata} from "network/home"
export default {
  name:"home",
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      banners:[],
      recommends:[],
    }
  },
  created(){
    getHomeMultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: aliceblue;
}
#home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
</style>