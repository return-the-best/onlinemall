export const backTopMixin={
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300);
    }
  },
  data(){
    return{
      isShowBacktop:false
    }
  }
}