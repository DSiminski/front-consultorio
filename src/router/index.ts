import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecretariaView from '../views/Secretaria/SecretariaView.vue'
import SecretariaForm from '../views/Secretaria/SecretariaForm.vue'
// import AgendamentoView from '../views/Agenda/AgendamentoView'
import ConvenioForm from '../views/Convenio/ConvenioForm.vue'
import ConvenioView from '../views/Convenio/ConvenioView.vue'
import HistoricoView from '../views/Historico/HistoricoView.vue'
import MedicoView from '../views/Medico/MedicoView.vue'
import MedicoForm from '../views/Medico/MedicoForm.vue'
import PacienteForm from '../views/Paciente/PacienteForm.vue'
import PacienteView from '../views/Paciente/PacienteView.vue'
import EspecialidadeView from '../views/Especialidade/EspecialidadeView.vue'
import EspecialidadeForm from '../views/Especialidade/EspecialidadeForm.vue'
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
    path: '/secretariaForm',
    name: 'SecretariaForm',
    component: SecretariaForm,
  },
  
 
  // {
  //   path: '/agendamentoView',
  //   name: 'AgendamentoView',
  //   component: AgendamentoView,
  // },
{
  path: '/convenioForm',
  name: 'ConvenioForm',
  component: ConvenioForm,
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
  path: '/medicoForm',
  name: 'MedicoForm',
  component: MedicoForm,
},
{
  path: '/pacienteForm',
  name: 'PacienteForm',
  component: PacienteForm,
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
  path: '/especialidadeForm/:model',
  name: 'EspecialidadeForm',
  component: EspecialidadeForm, 
  props:(router) =>({model:router.params.model})
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
