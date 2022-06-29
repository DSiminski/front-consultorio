<template>
    <h1 class="title is-4 has-text-left">Cadastrar Médicos</h1>
    <form>
        <div class="columns p-5">
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Nome</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Login</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome de usuario">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">RG</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um rg">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Telefone</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um telefone">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Sexo</label>
                    <div class="control is-flex">
                        <div class="select"> 
                            <select>
                                <option value="">Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Consultório</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome de consultório">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CRM</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um CRM">
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Insira um email">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Senha</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Insira uma senha">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CPF</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um cpf">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Nacionalidade</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira uma nacionalidade">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Especialidade</label>
                    <div class="control is-flex">
                        <div class="select"> 
                            <select>
                                <option value="">Selecione</option>
                                <option value="Cardiologista">Cardiologista</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Porcentagem De Participação</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Insira o valor da %">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/medicos">
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
    export default class MedicoCadastro extends Vue {

    }
</script>

<style>
@import "~bulma/bulma.sass";
    .select, .select select {
        width: 100%;
    }
    .btn {
        width: 100%;
    }
</style>