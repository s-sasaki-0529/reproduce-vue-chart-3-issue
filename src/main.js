import Vue from "vue";
import CompositionAPI from "@vue/composition-api";
import App from "./components/App.vue";

Vue.use(CompositionAPI);

new Vue({
  el: "#app",
  comments: {
    App,
  },
  render: function (createElement) {
    return createElement(App);
  },
});
