import VueFullPage from "vue-fullpage.js";
import "@/assets/styles/plugin/fullpage.min.css";
import "@/assets/scripts/scrolloverflow.min";
import Vue from "vue";

export function configFullPage() {
  Vue.use(VueFullPage);
}
