import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态引入路由并实现懒加载
const routerList = [];
function importAllRoute(r) {
    r.keys().forEach(file => {
        routerList.push(r(file).default);
    });
}
importAllRoute(require.context('.', false, /\.route.js/));

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routerList
  ]
})
