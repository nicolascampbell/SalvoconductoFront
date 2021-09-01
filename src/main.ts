import Vue from 'vue'
import { LayoutPlugin,ImagePlugin,ModalPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(LayoutPlugin);
Vue.use(ImagePlugin);
Vue.use(ModalPlugin);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
