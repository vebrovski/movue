import Vue from 'vue'
import VueRouter from 'vue-router'
import mainMenuRoutes from '@routes/mainMenuRoutes'
import PageHome from '@components/pages/PageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: PageHome,
  },
]

mainMenuRoutes.forEach( route => {
  routes.push(route)
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router