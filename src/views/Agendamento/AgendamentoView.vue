<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Agendamentos</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <input class="button has-background-primary" type="button" value="Cadastrar" @click="onClickPaginaCadastrar()">
      </div>
    </div>
    <div class="column is-11">
       <table class="table">
        <thead>
            <tr>
                <th>Paciente</th>
                <th>Medico</th>
                <th>Secretaria</th>
                <th>Data de inicio da consulta</th>
                <th>Data fim da Consulta</th>
                <th>Status</th>
                <th>Encaixe</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="agendamento in this.agendamentos" :key="agendamento.id">
                <td>{{agendamento.paciente.nome}}</td>
                <td>{{agendamento.medico.nome}}</td>
                <td>{{agendamento.secretaria.nome}}</td>
                <td>{{agendamento.dataDe}}</td>
                <td>{{agendamento.dataAte}}</td>
                <td>{{agendamento.statusAgendamento}}</td>
                <td>{{agendamento.encaixe}}</td>
                <td>
                  <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(agendamento.id)" value="Detalhar">
                </td>
            </tr>
        </tbody>
      </table>
      <div class="control">
            <router-link to="/historicoView">
              <input class="button has-background-primary has-text-white is-uppercase btn" value="Historico">
            </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 
  import { Agendamento } from '../../model/agendamento.model';
  import { AgendamentoClient } from '../../client/agendamento.client';
  import { PageRequest } from '../../model/page-request';
  import { PageResponse } from '../../model/page.response';
  import { PacienteClient } from '../../client/paciente.client';
  import { MedicoClient } from '../../client/medico.client';
import { SecretariaClient } from '@/client/secretaria.client';

  export default class AgendamentoView extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Agendamento>= new PageResponse();
    agendamentoClient!: AgendamentoClient
    agendamentos: Agendamento[]=[]
    pacienteClient!: PacienteClient
    medicoClient!: MedicoClient
    secretariaClient!: SecretariaClient

      public mounted(): void {
      this.agendamentoClient = new AgendamentoClient();
      this.getAgendamento()
      console.log(this.agendamentos)
      }
    
      getAgendamento(): void{
        this.agendamentoClient.listAllToday(this.pageRequest).then((success)=>{
          this.pageResponse = success;
          this.agendamentos = this.pageResponse.content
        }).catch((error)=> {console.log(error)})
      }
      public onClickPaginaCadastrar() :void{
        this.$router.push({name: 'AgendamentoForm',params: { model: 'cadastrar'}})
      }
      public onClickPaginaDetalhar(idAgendamento: number){
        this.$router.push({ name: 'AgendamentoForm', params: { id: idAgendamento, model: 'detalhar' } })
      }
  }

</script>