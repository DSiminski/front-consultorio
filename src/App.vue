
<template>
  <div class="content">
    <div class="column is-fullhd header">
      <h1>Consultório</h1>
    </div>

    <div class="columns mt-3">
      <div class="column is-3">
        <aside class="menu">
          <p class="menu-label has-text-left pl-3">
            Home
          </p>
              <p class="menu-label has-text-left pl-3"> Administração </p>
               <ul class="menu-list">
                  <li><router-link to="/convenioView">Convenio</router-link></li>           
                  <li><router-link to="/especialidadeView">Especialidade</router-link></li>
                </ul>
              <p class="menu-label has-text-left pl-5"> Úsuario </p>
               <ul class="menu-list">
                  <li><router-link to="/medicoView">Médicos</router-link></li>
                  <li><router-link to="/secretariaView">Secretárias</router-link></li>
                
                  <li><router-link to="/pacienteView">Paciente</router-link></li>
                </ul>
              <p class="menu-label has-text-left pl-5"> Agenda </p>
               <ul class="menu-list">
                  <li><router-link to="/agendamentoView">Agendamentos</router-link></li>
                  <li><router-link to="/historicoView">Histórico</router-link></li>
                </ul>
        </aside>
      </div>
      <div class="column is-9">
        <router-view >
        </router-view >
      </div>
    </div>
  <Footer>
      <div class="column is-fullhd footer">
        <h1>Footer</h1>
      </div>
</Footer>
  </div>

</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  export default class App extends Vue {}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100vh;

}
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

.header {
  background-color: aqua;
  max-height: 80px;
  text-align: left;

  h1 {
    color: black;
  }
}

.footer {
  background-color: aqua;
  text-align: center;
  h1 {
    color: black;
  }
}

.menu {
  color: aqua;
  background-color:palevioletred;
  text-align: left;
}

nav {
  a {
    font-weight: bold;
    color: brown;

    &.router-link-exact-active {
      color: blueviolet;
    }
  }

}
</style>
