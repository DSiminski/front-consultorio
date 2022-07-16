
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
  <div class="column is-12 footer">
        <p class="footer-content">Made with <span id="heart-emoji">❤</span> by <a href="http://" target="_blank" rel="noopener noreferrer" id="link-profile">Dayane</a></p>
  </div>
  </div>

</template>

<script lang="ts">
  import { Vue } from 'vue-class-component'; 

  export default class App extends Vue {}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

#app {

  font-family: Palatino, URW Palladio L, serif;
  font-size: 100%;
  text-align: center;
  color: gray;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; 
}
.header {
  background-color: black;
  text-align: left;

  h1 {
    color: gray;
  }
}

.footer {
    background-color: black;
    max-height: 100px;
    min-width: 100vw;
    bottom: 0;
    display: block;
}

.footer-content {
    display: block;
    text-align: center;
    color: grey;
    position:relative;
    top: 50%;
    transform: translateY(-100%);
}

#heart-emoji {
    color: red;
}

#link-profile:link {
    text-decoration: none;
}

#link-profile:hover {
    text-decoration: underline;
    color: white;
}


.menu {
  color: aqua;
  text-align: left;
}

</style>
