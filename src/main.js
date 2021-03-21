import Vue from 'vue'
import App from './App.vue'
import {JumpCloudService} from './jumpCloudService';


Vue.config.productionTip = false
Vue.prototype.$jumpService = new JumpCloudService();
new Vue({
  render: h => h(App),
}).$mount('#app')
