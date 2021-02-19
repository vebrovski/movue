import Vue from 'vue'
import App from '@components/App.vue'
import router from '@router/router'
import store from '@store/store'
import './index.scss'
import MenuList from "@components/molecules/MenuList.vue"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css' // (>= Swiper 6.x)
//import 'swiper/css/swiper.css' // (<= Swiper 5.x)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.component('MenuList', MenuList)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
