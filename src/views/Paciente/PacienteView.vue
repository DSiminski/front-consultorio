<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Pacientes</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
         <td>
          
           <input class="button has-background-primary" type="button" value="Cadastrar" @click="onClickPaginaCadastrar()">
        
        </td>
      </div>
    </div>
    <div class="column is-11">
       <table class="table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Tipo Atendimento</th>
                <th>Cartao</th>
                <th>Vencimento</th>
                <th>Convênio</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="paciente in this.pacientes" :key="paciente.id">   
                <td>{{paciente.nome}}</td>
                <td>{{paciente.tipoAtendimento}}</td>
                <td>{{paciente.numeroCartaoConvenio}}</td>
                <td>{{paciente.dataVencimento}}</td>
                <td><div v-if="paciente.convenio">{{paciente.convenio.nome}}</div></td>
                <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(paciente.id)" value="Detalhar">
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
   import { Vue } from 'vue-class-component'; 
  import { PageRequest } from '@/model/page-request';
  import { PageResponse } from '@/model/page.response';
  import { Paciente } from '@/model/paciente.model';
  import { PacienteClient } from '@/client/paciente.client';
  export default class PacienteView extends Vue {
     pageRequest: PageRequest = new PageRequest()
     pageResponse: PageResponse<Paciente> = new PageResponse()
     pacientes: Paciente[] = []
     pacienteClient!: PacienteClient

    public mounted():void {
      this.pacienteClient = new PacienteClient()
      this.listarPacientes()
    }
    private listarPacientes():void {
      this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponse = success
            this.pacientes = this.pageResponse.content
          },
          error => console.log(error)
        )
    }
    public onClickPaginaCadastrar():void {
      this.$router.push({name: 'PacienteForm', params: { model: 'cadastrar'}})
    }
    public onClickPaginaDetalhar(id: number):void {
      this.$router.push({name: 'PacienteForm', params: {id: id, model: 'detalhar'}})
    }
  }
</script>