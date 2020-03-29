<template>
  <div class="div">
      this is grand-child <br>
      爷爷组件provide的响应式值：{{data.name}}
  </div>
</template>

<script>
export default {
    components:{},
    props:{},
    inject: ['data'],
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
