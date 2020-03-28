// 同步的import和require会通过webpack打包在一起，一次性加载
// 动态引入会单独打包，需要的时候再加载，如果没有使用动态引入，会把所有的vuex打包到app.xxxx.js文件中，体积过大，首屏加载慢
const plugins = {
    install: function(vue) {
        vue.mixin({
            created: function() {
                const options = this.$options;
                if(options.registerVuex && !this.$store.state[options.name]) {
                    // 动态引入必须给字符串，不能是变量
                    import('../store/modules/' + options.name).then(res => {
                        this.$store.registerModule(options.name, res.default);
                    })
                }
            }
        })
    }
}

export default plugins;