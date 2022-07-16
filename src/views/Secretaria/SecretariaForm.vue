<template>
    <h1 class="title is-4 has-text-left">Cadastrar Secretarias</h1>
    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete"></button>
                {{ notification.message }}
            </div>
        </div>
    </div>
    <form>
        <div class="columns p-5">
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Nome</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome" v-model="secretarias.nome">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Login</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome de usuario"
                            v-model="secretarias.login">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">RG</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um rg" v-model="secretarias.rg">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Telefone</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um telefone"
                            v-model="secretarias.telefone">
                    </div>
                </div>
                 <div class="field">
                    <label class="label has-text-left">Celular</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um celular"
                            v-model="secretarias.celular">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Sexo</label>
                    <div class="control is-flex">
                        <div class="select">
                            <select v-model="secretarias.sexo">
                                <option value="">Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Pis</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira o pis" v-model="secretarias.pis">
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Insira um email" v-model="secretarias.email">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Senha</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Insira uma senha" v-model="secretarias.senha">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CPF</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um cpf" v-model="secretarias.cpf">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Nacionalidade</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira uma nacionalidade"
                            v-model="secretarias.nacionalidade">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Data De Contratação</label>
                    <div class="control">
                        <input class="input" type="datetime-local" v-model="secretarias.dataContratacao">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Salario</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Insira o salario" v-model="secretarias.salario">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/secretariaView">
                        <input class="button has-background-primary has-text-white is-uppercase btn" value="Voltar">
                    </router-link>
                </div>
            </div>
           <div class="field" v-if="this.model === 'cadastrar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Cadastrar"
                    @click="onClickCadastrar()">
            </div>
        </div>
        <div class="field" v-if="this.model === 'detalhar'">
            <div class="control">
                <input class="button has-background-danger has-text-white is-uppercase btn" type="button" value="Desativar"
                    @click="onClickDesativar()">
            </div>
        </div>
        <div class="field" v-if="this.model === 'detalhar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Editar"
                    @click="onClickEditar()">
            </div>
        </div>
        </div>
    </form>
</template>

<script lang="ts">
import { PageRequest } from "@/model/page-request"
import { PageResponse } from "@/model/page.response"
import { Secretaria } from "@/model/secretaria.model"
import { Vue } from "vue-class-component"
import { SecretariaClient } from "@/client/secretaria.client"
import { Notification } from "@/model/notification"
import { Prop } from 'vue-property-decorator'


export default class SecretariaForm extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Secretaria> = new PageResponse()
    secretariaClient!: SecretariaClient
    secretarias: Secretaria = new Secretaria()
    notification: Notification = new Notification()

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

    public mounted(): void {
        this.secretariaClient = new SecretariaClient()
        if(this.id){
        this.getById(this.id)
        
        }
    }
     private getById(id: number):void {
            this.secretariaClient.getSecretariasById(id)
                .then(
                    success => {
                        this.secretarias = success
                    }
                )
        }
    public onClickCadastrar(): void {
        this.secretariaClient.postSecretaria(this.secretarias)
        
            .then(
                (success: any) => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Secretaria Cadastrada com sucesso!!!')

                },
                (error: any) => {
                    console.log(error)
                    this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar Secretaria')
                }
            )
    }
    private onClickEditar():void {
            this.secretariaClient.putSecretaria(this.secretarias)
                .then(
                    success => {
                        this.$router.push('/secretariaView')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }

    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.secretarias = new Secretaria()
    }
}

</script>

<style>
.select,
.select select {
    width: 100%;
}

.btn {
    width: 15rem;
}
</style>