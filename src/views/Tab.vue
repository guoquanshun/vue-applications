<template>
  <div class="div">
      <tabs :value="tabVal" @change='changeTab'>
          <tab id='tab1' label='tab1' index='1'>
            <div>this is content1 {{inputContent}}</div>
          </tab>
          <tab id='tab2' index='2'>
            <span slot="label">tab2</span>
            <div>this is content2</div>
          </tab>
          <tab id='tab3' label='tab3' index='3'>
            <div>this is content3</div>
          </tab>
      </tabs>
      <input type="text" v-model="inputContent">
  </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
      return {
        tabVal: '1',
        inputContent: ''
      };
    },
    watch:{},
    computed:{},
    methods:{
      changeTab(index) {
        this.tabVal = index;
      }
    },
    created(){},
    mounted(){}
}
</script>
<style lang="less" scoped>
.div{}
</style>
