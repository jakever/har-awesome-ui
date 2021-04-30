import Vue from "vue";
import App from "./App.vue";

/*---------------------------------------全局引入-------------------------------------------*/
// import HARUI from 'har-ui'
// Vue.use(HARUI)

/*---------------------------------------按需引入-------------------------------------------*/
import { 
  Button,
  Input
 } from 'har-ui'
console.log(Button, '~~~');
console.log(Input, '~~~');

Vue.use(Button)
Vue.use(Input)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
