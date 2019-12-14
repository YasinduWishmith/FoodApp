import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
// import DrinkItems from './components/DrinkItems'
import Home from './components/Home.vue';
// import CategoryHome from './components/CategoryHome'


Vue.use(VueRouter)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.component('NavBar',NavBar);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


const routes=[
  {path: './home',component:Home}
];

const router = new VueRouter({
  routes
});