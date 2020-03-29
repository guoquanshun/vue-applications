import Vue from 'vue';
import notify from './notification/functions'

// 统一注册全局公共组件
const components = require.context('./common', true, /\.vue$/);
components.keys().forEach(filePath => {
    const component = components(filePath);
    // const componentName = filePath.replace(/\.\//, '').replace(/\.\w+$/, '');
    Vue.component(component.default.name, component.default || component);
});

Vue.prototype.$notify = notify;