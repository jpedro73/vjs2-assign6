import Vue from "vue";
import App from "./App.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

Vue.component("comp-header", Header);
Vue.component("comp-footer", Footer);

new Vue({
  el: "#container",
  render: h => h(App)
});
