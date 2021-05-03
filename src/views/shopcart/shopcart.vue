.<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <template #center>
      <div>购物车({{cartLength}})</div>
    </template>
  </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import{mapGetters}from'vuex'
export default {
  name:"shopcart",
  components: {
    NavBar,
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
}
</style>