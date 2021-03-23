import Vue from 'vue'
import App from './App.vue'
import {JumpCloudService} from './jumpCloudService';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.prototype.$jCloudService = new JumpCloudService();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
