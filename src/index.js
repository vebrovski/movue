import Vue from 'vue'
import App from '@components/App.vue'
import router from '@router/router'
import store from '@store/store'
import './index.scss'
import MenuList from "@components/molecules/MenuList.vue"

Vue.config.productionTip = false

Vue.component('MenuList', { MenuList })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
