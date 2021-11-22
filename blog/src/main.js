
import App from './App.vue';
//import router from './router';

import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  //router,
  template: '<App/>',
  components: { App },
  render: h => h(App),
}).$mount('#app')
