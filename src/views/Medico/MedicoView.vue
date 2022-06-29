<template>
  <div>
    <h3 class="title is-5 has-text-left">Lista de Médicos</h3>
    <div class="columns">
      <div class="column is-8">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-3">
        <router-link to="/medicoCadastro"><button class="button">Cadastrar</button></router-link>
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
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><router-link to="/detalheMedico"><button class="button">Detalhar</button></router-link></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
    import { Options,Vue } from 'vue-class-component'; 

    @Options({
        
    })
    export default class MedicoView extends Vue {

    }
</script>