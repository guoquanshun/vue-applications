import Vue from 'vue';

// 统一注册全局公共组件
const components = require.context('./common', false, /\.vue$/);
components.keys().forEach(file => {
    const component = components(file);
    const componentName = file.replace(/\.\//, '').replace(/\.\w+$/, '');
    Vue.component(componentName, component.default || component);
});