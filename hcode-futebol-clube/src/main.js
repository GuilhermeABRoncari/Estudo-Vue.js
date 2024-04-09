/** @format */

import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/routes";
import Vue2Filters from "vue2-filters";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(Vue2Filters);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
