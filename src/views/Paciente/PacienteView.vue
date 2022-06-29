<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Pacientes</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <router-link to="/pacienteCadastro"><button class="button">Cadastrar</button></router-link>
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
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><router-link to="/detalhePaciente"><button class="button is-size-6">Detalhar</button></router-link></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  export default class PacienteView extends Vue {}
</script>