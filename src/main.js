import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD

Vue.use(Vant);
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> c71bb6a3d8172b0cdf5c370d8e761069373b6bb3

Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
    render: h => h(App),
    router
=======
  render: h => h(App),
  router
>>>>>>> c71bb6a3d8172b0cdf5c370d8e761069373b6bb3
}).$mount('#app')