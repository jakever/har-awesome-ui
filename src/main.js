import Vue from "vue";
import App from "./App.vue";

/*---------------------------------------全局引入-------------------------------------------*/
// import HARUI from 'har-ui'
// Vue.use(HARUI)

/*---------------------------------------按需引入-------------------------------------------*/
import { Button } from 'har-ui'
Vue.use(Button)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
