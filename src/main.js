import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './registerServiceWorker'
import './components/register';
import plugins from './plugins/plugins';

Vue.config.productionTip = false;
Vue.use(plugins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
