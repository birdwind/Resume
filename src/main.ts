import Vue from "vue";
import { configAnimate, configElementUi, configErrorHandler, configFullPage, vuetify } from "@/base/config";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

configErrorHandler();
configElementUi();
configFullPage();
configAnimate();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
