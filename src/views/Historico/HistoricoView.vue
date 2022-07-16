<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Históricos</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
    </div>
    <div class="column is-11">
       <table class="table">
        <thead>
            <tr>
                <th>Paciente</th>
                <th>Medico</th>
                <th>Secretaria</th>
                <th>Data</th>
                <th>Status</th>
                <th>Observação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="historico in this.historicos" :key="historico.id">
                <td>{{historico.paciente.nome}}</td>
                <td>{{historico.medico.nome}}</td>
                <td>{{historico.secretaria.nome}}</td>
                <td>{{historico.data}}</td>
                <td>{{historico.statusAgendamento}}</td>
                <td>{{historico.observacao}}</td>
                <td>
                  <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(historico.id)" value="Detalhar">
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 
  import { PageResponse} from '@/model/page.response';
  import { PageRequest } from '@/model/page-request';
  import { Historico } from '@/model/historico.model';
  import { HistoricoClient } from '@/client/historico.client';
  import { Agendamento } from '@/model/agendamento.model';
  export default class HistoricoView extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Historico>= new PageResponse();
    historicoClient!: HistoricoClient
    historicos: Historico[] = []
    agendamento: Agendamento[]=[]

     public mounted(): void {
      this.historicoClient = new HistoricoClient();
      this.getHistorico()
      
      }
      getHistorico(): void{
        this.historicoClient.getHistoricos(this.pageRequest).then(success =>{
          this.pageResponse = success;
          this.historicos = this.pageResponse.content
        }).catch(error=> {console.log(error)})
      }
  }
</script>