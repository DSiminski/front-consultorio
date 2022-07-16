<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Especialidades</h3>
    <div class="columns">
      <div class="column is-6">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
          <input class="button has-background-primary" type="button" value="Cadastrar" @click="onClickPaginaCadastrar()">
      </div>
    </div>
   
    <div class="column is-9">
      <table class="table">
        <thead>
            <tr>
              <th>Nome</th>
              <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="especialidade in this.especialidades" :key="especialidade.id">            
              <td>{{especialidade.nome}}</td>
              <td>
                <input type="button" class="button is-size-6 has-background-gray-light" 
                  @click="onClickPaginaDetalhar(especialidade.id)" value="Detalhar">
              </td>
            </tr>
        </tbody>
      </table>
    </div> 
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  
  import { PageRequest } from '@/model/page-request'
  import { PageResponse } from '@/model/page.response'
  
  import { Especialidade } from '@/model/especialidade.model'
  import { EspecialidadeClient } from '@/client/especialidade.client'
  
  export default class EspecialidadeView extends Vue {

    public pageRequest: PageRequest = new PageRequest()
    public pageResponse: PageResponse<Especialidade> = new PageResponse()
    
    public especialidades: Especialidade[] = []
    public especialidadeClient!: EspecialidadeClient

    public mounted(): void {
      this.especialidadeClient = new EspecialidadeClient()
      this.listarEspecialidade()
    }
    public listarEspecialidade(): void {
      this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => { 
            this.pageResponse = success
            this.especialidades = this.pageResponse.content
             console.log(this.especialidades)
          },
          error => console.log(error)
        )
    }
    public onClickPaginaCadastrar():void {
      this.$router.push({name: 'EspecialidadeForm', params: { model: 'cadastrar'}})
    }
    public onClickPaginaDetalhar(idEspecialidade: number){
      this.$router.push({ name: 'EspecialidadeForm', params: { id: idEspecialidade, model: 'detalhar' } })
    }
  }
</script>