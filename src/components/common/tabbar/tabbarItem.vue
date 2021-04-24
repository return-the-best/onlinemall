.<template>
  <div class="tabbaritem" :class="{active:isActive}" @click="itemClick">
      <div class="icon"><slot name="item-icon"></slot></div>
      <div class="text"><slot name="item-text"></slot></div>
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

<style scoped>
.tabbaritem {
    flex:1;
}
.icon img {
    height: 23px;
    width: 23px;
    margin: 3px;
    vertical-align: middle;
}
.text{
    font-size: 14px;
}
.active{
    color: red;
}
</style>