<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Históricos</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <button class="button">Cadastrar</button>
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
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button class="button is-size-6">Detalhar</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  export default class HistoricoView extends Vue {}
</script>