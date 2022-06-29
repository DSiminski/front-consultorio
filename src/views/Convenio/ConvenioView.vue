<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Convênios</h3>
    <div class="columns">
      <div class="column is-6">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <router-link to="/convenioCadastro"><button class="button">Cadastrar</button></router-link>
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
            <tr>
                <td></td>
                <td></td>
                <td><router-link to="/detalheConvenio"><button class="button is-size-6">Detalhar</button></router-link></td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  export default class ConvenioView extends Vue {}
</script>

<style>
  .button {
    width: 60%;
  }
</style>