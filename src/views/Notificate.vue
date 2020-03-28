<template>
    <div class="div">
        <h1>This is an about page</h1>
        <!-- <notification :content="'this is Notification'"/> -->
        <button @click="notifiy">notifiy</button>
    </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
      return {
      };
    },
    watch:{},
    computed:{},
    methods:{
        notifiy() {
            this.$notify({
                content: 'this is notify',
                btn: 'close'
            })
        }
    },
    created(){},
    mounted(){}
}
</script>
<style lang="less" scoped>
.div{}
</style>
