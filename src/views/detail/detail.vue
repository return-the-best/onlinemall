<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar/detailNavBar.vue'
import {getDetail} from 'network/detail'
import DetailSwiper from './childComps/detailSwiper.vue'
export default {
components: {
DetailNavBar,
DetailSwiper
  },
name:"detail",
data(){
  return{
    iid:null,
    topImages:[]
  }
},
created(){
  this.iid=this.$route.query.iid
  getDetail(this.iid).then(res=>{
    this.topImages=res.result.itemInfo.topImages
  })
}
}
</script>

<style>

</style>