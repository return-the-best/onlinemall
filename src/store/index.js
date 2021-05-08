import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    addCart:{
      state:{
        cartList:[]
      },
      mutations:{
        addCounter(state,payload){
          payload.count++
        },
        addCartList(state,payload){
          payload.checked=true
          state.cartList.push(payload)
        },
        checkedClick(state,payload){
          payload.checked=!payload.checked
        }
      },
      actions:{
        addToCart(context,payload){
          let OldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
          if(OldProduct){
            context.commit('addCounter',OldProduct)
          }else{
            payload.count=1
            context.commit('addCartList',payload)
          }
        }
      },
      getters:{
        cartLength(state){
          return state.cartList.length
        },
        cartList(state){
          return state.cartList
        }
      }
    },//添加购物车模块
  }
})
export default store