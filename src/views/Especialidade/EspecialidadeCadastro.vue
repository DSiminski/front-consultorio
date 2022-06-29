<template>
    <h1 class="title is-4 has-text-left">Cadastrar Especialidades</h1>
    <form>
        <div class="columns p-5">
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Nome</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/especialidades">
                        <input class="button has-background-primary has-text-white is-uppercase btn" value="Voltar">
                    </router-link>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="button has-background-primary has-text-white is-uppercase btn" type="submit" value="Cadastrar">
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
    import { Options,Vue } from 'vue-class-component'; 

    @Options({
        
    })
    export default class EspecialidadeCadastro extends Vue {

    }
</script>

<style>
    .btn {
        width: 15rem;
    }
</style>