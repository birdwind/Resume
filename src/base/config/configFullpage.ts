import VueFullPage from "v-fullpage";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min";// Optional. When using fullpage extensions
import Vue from "vue";

export function configFullPage() {
  Vue.use(VueFullPage);
}
