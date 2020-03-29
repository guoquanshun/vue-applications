export default {
    path: '/tab',
    name: 'tab',
    component: () => import(/* webpackChunkName: 'Tab' */'../views/Tab.vue')
}