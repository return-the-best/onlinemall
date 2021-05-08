.<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <template #center>
      <div>购物车({{cartLength}})</div>
    </template>
  </nav-bar>
  <cart-list class="cart-list"/>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import{mapGetters}from'vuex'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  name:"shopcart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  },
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>