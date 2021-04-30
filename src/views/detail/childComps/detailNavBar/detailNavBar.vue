<template>
  <div>
    <nav-bar class="detail-nav">
      <template #center>
        <div class="title">
          <div v-for="(item,index) in titles"
           class="title-item"
          :key="index"
          :class="{active:index===currentIndex}"
          @click="titleClick(index)">{{item}}</div>
        </div>
      </template>
      <template #left>
        <div class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:"detailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex=index
      this.$emit('titleClick',index)
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.detail-nav{
  background-color: #fff;
  font-weight: normal;
}
.title{
  display: flex;
  justify-content: space-around;
}
.titleItem{
  flex: 1;
}
.active{
  color:var(--color-high-text)
}
.back img{
  margin-top: 10px;
}
</style>