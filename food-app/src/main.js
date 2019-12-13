import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.component('NavBar',NavBar);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
