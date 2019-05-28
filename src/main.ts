import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './main.less';
import config from "./$config"

Vue.config.productionTip = false

//添加全局变量属性
Vue.prototype.$config = config;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
