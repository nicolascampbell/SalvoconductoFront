import Vue from 'vue'
import { LayoutPlugin,ImagePlugin,ModalPlugin,TooltipPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(LayoutPlugin);
Vue.use(ImagePlugin);
Vue.use(ModalPlugin);
Vue.use(TooltipPlugin)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
