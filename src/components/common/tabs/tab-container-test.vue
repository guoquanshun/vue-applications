<template>
    <div class='tab-content'>
        {{panesContent}}
    </div>
</template>

<script>
export default {
    name: 'tab-container-test',
    props: {
        panes: {
            type: Array,
            required: true
        }
    },
    data(){
      return {
      };
    },
    watch:{},
    computed:{
        panesContent() {
            return this.panes.map(p => {
                return p.active ? p.$slots.default : null;
            })
        }
    },
    methods:{},
    created(){},
    mounted(){}
}
</script>
<style lang="less" scoped>
.div{}
</style>
