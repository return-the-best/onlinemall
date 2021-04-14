.<template>
  <div class="tabbaritem" :class="{active:isActive}" @click="itemClick">
      <slot name="item-icon"></slot>
      <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name:"tabbarItem",
props:{
    path: String
},
computed:{
    isActive(){
        return this.$route.path.indexOf(this.path) !== -1
    }
},
methods:{
    itemClick(){
        this.$router.replace(this.path).catch(err=>err)
    }
}
}
</script>

<style>
.tabbaritem {
    flex:1;
    height: 49px;
    text-align: center;
}
img {
    height: 25px;
    width: 25px;
    margin: 0px;
    vertical-align: middle;
}
.active{
    color: red;
}
</style>