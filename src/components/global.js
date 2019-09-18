import Vue from 'vue';

// 统一注册全局公共组件
const components = require.context('./common', false, /\.vue$/);
components.keys().forEach(filePath => {
    const component = components(filePath);
    // const componentName = filePath.replace(/\.\//, '').replace(/\.\w+$/, '');
    Vue.component(component.default.name, component.default || component);
});