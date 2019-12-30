import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/Vant-components";
import "./assets/css/reset.css";
import BaiduMap from "vue-baidu-map";
import { BmlMarkerClusterer } from "vue-baidu-map";

Vue.component("bml-marker-cluster", BmlMarkerClusterer);
Vue.config.productionTip = false;
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "lbDGyPCEoyECOtxRKlgteFq3F7EHh0pO"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
