import Vue from "vue";
import './plugins/axios'
import './assets/css/common.css'
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import datetimeFormat from "./filters/datetimeFormat"

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
