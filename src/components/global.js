import Vue from 'vue';

// 统一注册全局公共组件
const components = require.context('./common', false, /\.vue$/);
components.keys().forEach(fileName => {
    const component = components(fileName);
    const componentName = fileName.replace(/\.\//, '').replace(/\.\w+$/, '');
    Vue.component(componentName, component.default || component);
});