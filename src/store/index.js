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
          state.cartList.push(payload)
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
        }
      }
    },//添加购物车模块
  }
})
export default store