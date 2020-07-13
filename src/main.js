import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.component("Authorized", Authorized);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
