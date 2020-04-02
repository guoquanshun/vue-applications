<template>
  <div class="div">
      <input type="text" v-model="name">
      <Child />
  </div>
</template>

<script>
import Child from './cp-child';
export default {
    components:{
        Child
    },
    props:{},
    provide() {
      const data = {};
      Object.defineProperty(data, 'name', {
        get: () => this.name,
        enumerable: true
      })
      return {
        data
      }
    },
    data(){
      return {
        name: ''
      };
    },
    watch:{},
    computed:{},
    methods:{},
    created(){},
    mounted(){
      console.log(this);
    }
}
</script>
<style lang="less" scoped>
.div{}
</style>
