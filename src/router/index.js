import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/postagens",
    name: "Postagens",
    component: () => import(  "@/views/Postagens.vue"),
    props: true,
  },
  {
    path:"/usuarios",
    name: "Usuarios",
    component: () => import( "@/views/Usuarios"),
    props: true,
  },
  {
    path:"/detalhes",
    name: "Detalhes",
    component: () => import( "@/views/Detalhes"),
    props: true,
  },
  {
    path:"/comentarios",
    name: "Comentarios",
    component: () => import( "@/views/Comentarios"),
    props: true,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
