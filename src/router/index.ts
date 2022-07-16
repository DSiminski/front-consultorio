import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecretariaView from '../views/Secretaria/SecretariaView.vue'
import SecretariaForm from '../views/Secretaria/SecretariaForm.vue'
import ConvenioForm from '../views/Convenio/ConvenioForm.vue'
import ConvenioView from '../views/Convenio/ConvenioView.vue'
import HistoricoView from '../views/Historico/HistoricoView.vue'
import MedicoView from '../views/Medico/MedicoView.vue'
import MedicoForm from '../views/Medico/MedicoForm.vue'
import PacienteForm from '../views/Paciente/PacienteForm.vue'
import PacienteView from '../views/Paciente/PacienteView.vue'
import EspecialidadeView from '../views/Especialidade/EspecialidadeView.vue'
import EspecialidadeForm from '../views/Especialidade/EspecialidadeForm.vue'
import AgendamentoView from '../views/Agendamento/AgendamentoView.vue'
import AgendamentoForm from '../views/Agendamento/AgendamentoForm.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: AgendamentoView
  },
  {
    path: '/secretariaView',
    name: 'SecretariaView',
    component: SecretariaView,
  },
  {
    path: '/secretariaForm/:model/:id?',
    name: 'SecretariaForm',
    component: SecretariaForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/agendamentoView',
    name: 'AgendamentoView',
    component: AgendamentoView,
  },
  {
    path: '/agendamentoForm/:model/:id?',
    name: 'AgendamentoForm',
    component: AgendamentoForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/convenioForm/:model/:id?',
    name: 'ConvenioForm',
    component: ConvenioForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },

  {
    path: '/convenioView',
    name: 'ConvenioView',
    component: ConvenioView,
  },

  {
    path: '/historicoView',
    name: 'HistoricoView',
    component: HistoricoView,
  },
  {
    path: '/medicoView',
    name: 'MedicoView',
    component: MedicoView,
  },
  {
    path: '/medicoForm/:model/:id?',
    name: 'MedicoForm',
    component: MedicoForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/pacienteForm/:model/:id?',
    name: 'PacienteForm',
    component: PacienteForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },
  {
    path: '/pacienteView',
    name: 'PacienteView',
    component: PacienteView,
  },
  {
    path: '/especialidadeView',
    name: 'EspecialidadeView',
    component: EspecialidadeView,
  },
  {
    path: '/especialidadeForm/:model/:id?',
    name: 'EspecialidadeForm',
    component: EspecialidadeForm,
    props: (router) => ({id: router.params.id, model: router.params.model})
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
