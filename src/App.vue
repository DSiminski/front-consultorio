
<template>
<div class = "header is fullhd">
<h1>Header</h1>
</div>

 <div class = "container">
    <div class = "container is-widescreen">
        <div class="columns is-mobile ">
    <div class="column is-three-fifths is-offset-one-fifth">
      Home
    </div>
  </div>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        Agendamento
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        Médicos
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        Pacientes
      </div>
    </div>
    </div>
  <router-view/>
      </div>

  <footer class="footer">
    <div>
      
    </div>
  </footer>
</template>

<style lang="scss">
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3b1097;
}

nav {
  padding: 150px;

  a {
    font-weight: bold;
    
    &.router-link-exact-active {
      
    }
  }
}
.header{

text-align: center;
color: black;
}
</style>
