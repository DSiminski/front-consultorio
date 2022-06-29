<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Secretarias</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <router-link to="/secretariaCadastro"><button class="button">Cadastrar</button></router-link>
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
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><router-link to="/secretariaDetalhes"><button class="button">Detalhar</button></router-link></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  export default class SecretariaView extends Vue {}
</script>