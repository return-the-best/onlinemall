.<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from "network/home"
export default {
  name:"home",
  components:{
    NavBar
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
</style>