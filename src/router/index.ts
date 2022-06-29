import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecretariaView from '../views/Secretaria/SecretariaView.vue'
import SecretariaCadastro from '../views/Secretaria/SecretariaCadastro.vue'
import SecretariaDetalhes from '../views/Secretaria/SecretariaDetalhes.vue'
//  import AgendamentoView from '../views/Agenda/AgendamentoView'
import ConvenioCadastro from '../views/Convenio/ConvenioCadastro.vue'
import ConvenioDetalhes from '../views/Convenio/ConvenioDetalhes.vue'
import ConvenioView from '../views/Convenio/ConvenioView.vue'
import EspecialidadeCadastro from '../views/Especialidade/EspecialidadeCadastro.vue'
import EspecialidadeDetalhe from '../views/Especialidade/EspecialidadeDetalhe.vue'
import EspecialidadeView from '../views/Especialidade/EspecialidadeView.vue'
import HistoricoView from '../views/Historico/HistoricoView.vue'
import MedicoView from '../views/Medico/MedicoView.vue'
import MedicoCadastro from '../views/Medico/MedicoCadastro.vue'
import MedicoDetalhes from '../views/Medico/MedicoDetalhes.vue'
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
  // {
  //   path: '/agendamentoView',
  //   name: 'AgendamentoView',
  //   component: AgendamentoView,
  // },
{
  path: '/convenioCadastro',
  name: 'ConvenioCadastro',
  component: ConvenioCadastro,
},
{
  path: '/convenioDetalhes',
  name: 'ConvenioDetalhes',
  component: ConvenioDetalhes,
},
{
  path: '/convenioView',
  name: 'ConvenioView',
  component: ConvenioView,
},
{
  path: '/especialidadeCadastro',
  name: 'EspecialidadeCadastro',
  component: EspecialidadeCadastro,
},
{
  path: '/especialidadeDetalhe',
  name: 'EspecialidadeDetalhe',
  component: EspecialidadeDetalhe,
},
{
  path: '/especialidadeView',
  name: 'EspecialidadeView',
  component: EspecialidadeView,
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
  path: '/medicoCadastro',
  name: 'MedicoCadastro',
  component: MedicoCadastro,
},
{
  path: '/medicoDetalhes',
  name: 'MedicoDetalhes',
  component: MedicoDetalhes,
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
