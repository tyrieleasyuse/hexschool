export default {
    //props為參考範例原始碼
    //帶入物件需類別驗證為type : Object，預設值為空物件
    props: {
        item: {
        type: Object,
        default() {
          return { 
          }
        }
      }
    },
    template : '#paginationTemplate',
    data(){
        return {
        }
    },
    methods :{
        navigatePage(index) {
            this.$emit('emit-navigate',index);
        }
    },
    mounted() {
    },
}
