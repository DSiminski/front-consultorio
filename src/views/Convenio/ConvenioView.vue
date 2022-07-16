<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Convênios</h3>
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
                <th>Valor</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
       
            <tr v-for="convenio in this.convenios" :key="convenio.id">            
              <td>{{convenio.nome}}</td>
              <td>{{convenio.valor}}</td>
              <td>
                <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(convenio.id)" value="Detalhar">
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
  import { Convenio } from '@/model/convenio.model'
  import { ConvenioClient } from '@/client/convenio.client'

export default class ConvenioView extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Convenio> = new PageResponse()
    convenios: Convenio[] = []
    convenioClient!: ConvenioClient
  public mounted(): void {
    this.convenioClient = new ConvenioClient()
    this.listarConvenios()
  }
  listarConvenios(): void {
    this.convenioClient.getConvenios(this.pageRequest)
      .then(
        (success:any) => {
          this.pageResponse = success
          this.convenios = this.pageResponse.content
        },
        (error: any) => console.log(error)
      )
  }
   public onClickPaginaCadastrar():void {
      this.$router.push({name: 'ConvenioForm', params: { model: 'cadastrar'}})
    }
   public onClickPaginaDetalhar(idConvenio: number){
      this.$router.push({ name: 'ConvenioForm', params: { id: idConvenio, model: 'detalhar' } })
    }
}
</script>

<style>
  .button {
    width: 60%;
  }
</style>