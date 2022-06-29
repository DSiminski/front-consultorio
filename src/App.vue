
<template>
<div class="content">
  <div class = "column is fullhd header">
    <h1>Header</h1>
  </div>

  <div class = "columns mt-3">
        <div class="column is-3">
              <aside class="menu">
                <p class="menu-label">
                   Home
                  </p>
                  <ul class="menu-list">
                    <li><a>Paciente</a></li>
                    <li><a>Médico</a></li>
                    <li><a>Secretária</a></li>
                  </ul>
              </aside>
          </div>
  <div class="column is-9">
      <router-view/><router-view/>
    </div>
  </div>
</div>
<Footer>
  <div class="column is-12 has footer">
    <h1>Footer</h1>
  </div>
</Footer>
</template>


<!-- <script> 
  import { HomeView } from "@/views/HomeView.vue";
  
  export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script> -->

<style lang="scss">
@import "~bulma/bulma.sass";

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: black;
  
}
.header{
background-color: aqua;
max-height: 80px;
text-align: center;
  h1{color: black;}
}

.footer {
  background-color: aqua;
  text-align: center;
  max-height: 80px;
  justify-content: flex-end;
  align-items:end;
h1{
      color: beige;
    }
}
.menu{
  color: aqua;
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
