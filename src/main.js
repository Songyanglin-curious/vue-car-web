import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入ElementUi组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入图标组件
import Icon from "./components/icon/icon.vue";
// 祖册图标组件
Vue.component('icon', Icon);
// 引入头部返回组件
import "@c/back";

Vue.config.productionTip = false;
import "./plugins/aMap"
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
