import Vue from 'vue'
import VueRouter from 'vue-router'
import mainMenuRoutes from '@router/mainMenuRoutes'
import PageHome from '@components/pages/PageHome.vue'
import PageNotFound from '@components/pages/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: PageHome,
    component: PageHome
  },

  {
    path: '*',
    component: PageNotFound,
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