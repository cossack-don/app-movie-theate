import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plagins/bootstrap/index";


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");


// https://www.omdbapi.com/
// https://bootstrap-vue.org/docs/components/button
// Когда создаешь и добавляешь инфу в файл env нужно перезапустить сервер иначе будет выкидывать ошибки с аксиос и т.д. или просто не будет работать