import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecretariaView from '../views/Secretaria/SecretariaView.vue'
import SecretariaCadastro from '../views/Secretaria/SecretariaCadastro.vue'
import SecretariaDetalhes from '../views/Secretaria/SecretariaDetalhes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/secretariaView',
    name: 'SecretariaView',
    component: SecretariaView,
  },
  {
    path: '/secretariaCadastro',
    name: 'SecretariaCadastro',
    component: SecretariaCadastro,
  },
  {
    path: '/secretariaDetalhes',
    name: 'SecretariaDetalhes',
    component: SecretariaDetalhes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
