<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Secretarias</h3>
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
                <th>Nome</th>
                <th>PIS</th>
                <th>Salario</th>
                <th>Data Contratação</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="secretaria in this.secretarias" :key="secretaria.id">
                <td>{{secretaria.nome}}</td>
                <td>{{secretaria.pis}}</td>
                <td>{{secretaria.salario}}</td>
                <td>{{secretaria.dataContratacao}}</td>
                <td>
                  <input type="button" class="button is-size-6 has-background-grey-light" 
                  @click="onClickPaginaDetalhar(secretaria.id)" value="Detalhar">
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 
  import { SecretariaClient } from '@/client/secretaria.client';
  import { Secretaria } from '@/model/secretaria.model';
  import { PageResponse } from '@/model/page.response';
  import { PageRequest } from '@/model/page-request';

  export default class SecretariaView extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Secretaria>= new PageResponse();
    secretarias: Secretaria[] = []
    secretariaClient!: SecretariaClient

    public mounted(): void {
      this.secretariaClient = new SecretariaClient();
      this.getSecretarias()
    }
    getSecretarias(): void {
      this.secretariaClient.getSecretarias(this.pageRequest).then((success)=>{
        this.pageResponse = success;
        this.secretarias = this.pageResponse.content
      }).catch((error)=> {console.log(error)})
    }
     public onClickPaginaCadastrar():void {
      this.$router.push({name: 'SecretariaForm', params: { model: 'cadastrar'}})
    }
  
  public onClickPaginaDetalhar(idSecretaria: number){
      this.$router.push({ name: 'SecretariaForm', params: { id: idSecretaria, model: 'detalhar' } })
    }
  }   
</script>