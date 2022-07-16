<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Médicos</h3>
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
                <th>CRM</th>
                <th>Especialidade</th>
                <th>Valor Da Consulta</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="medico in this.medicos" :key="medico.id">            
              <td>{{medico.nome}}</td>
              <td>{{medico.crm}}</td>
              <td>{{medico.especialidade.nome}}</td>
              <td>{{medico.porcenParticipacao}}</td>            
              <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(medico.id)" value="Detalhar">
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
  import { Medico } from '@/model/medico.model';
  import { MedicoClient } from '@/client/medico.client';

export default class MedicoView extends Vue {
    pageRequest: PageRequest = new PageRequest();
    pageResponse: PageResponse<Medico> = new PageResponse();
    medicos: Medico[] = []
    medicoClient!: MedicoClient
  public mounted(): void {
    this.medicoClient = new MedicoClient();
    this.getMedicos()
  }
  getMedicos(): void {
    this.medicoClient.getMedicos(this.pageRequest).then((success) => {
      this.pageResponse = success;
      this.medicos = this.pageResponse.content
    }).catch((error) => { console.log(error) })
  }
   public onClickPaginaCadastrar():void {
      this.$router.push({name: 'MedicoForm', params: { model: 'cadastrar'}})
    }
  public onClickPaginaDetalhar(idMedico: number){
      this.$router.push({ name: 'MedicoForm', params: { id: idMedico, model: 'detalhar' } })
    }

}

</script>