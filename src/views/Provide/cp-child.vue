<template>
  <div class="div">
      <span>this is child</span>
      <grand-child></grand-child>
  </div>
</template>

<script>
import grandChild from "./cp-grandchild";
export default {
    components:{
        grandChild
    },
    props:{},
    data(){
      return {
      };
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="less" scoped>
.div{}
</style>
