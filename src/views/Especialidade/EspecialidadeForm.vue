<template>
    <h1 class="title is-4 has-text-left">Cadastrar Especialidades</h1>
    
    <div class="column is-10">
        <div :class="notification.classe" v-if="notification.ativo">
            <button class="delete" @click="onClickFecharNotificacao()"></button>
            {{notification.message}}
        </div>
    </div>

    <div class="columns p-5">
        <div class="column is-10">
            <div class="field has-text-left">
                <label class="checkbox">
                    <input v-model="this.especialidade.ativo" class="checkbox" type="checkbox" checked  
                        :disabled="this.model == 'detalhar' ? true : false">
                    Ativo
                </label>
            </div>
            <div class="field">
                <label class="label has-text-left">Nome</label>
                <div class="control">
                    <input class="input" v-model="this.especialidade.nome" type="text" placeholder="Insira um nome" 
                        :disabled="this.model == 'detalhar' ? true : false">
                </div>
            </div>
        </div>
    </div>
    <div class="column is-10 is-flex is-justify-content-space-between p-5">
        <div class="field">
            <div class="control">
                <router-link to="/especialidadeForm">
                    <input type="button" class="button has-background-link has-text-white is-uppercase btn" value="Voltar" >
                </router-link>
            </div>
        </div>
        <div class="field" v-if="this.model === `cadastrar`">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Cadastrar"
                    @click="onClickCadastrar()">
            </div>
        </div>
        <div class="field" v-if="this.model === 'detalhar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Editar" 
                    @click="onClickPaginaDetalhar(this.id)">
            </div>
        </div>
        <div class="field" v-if="this.model === 'detalhar'">
            <div class="control">
                <input class="button has-background-danger has-text-white is-uppercase btn" type="button" value="Desativar"
                    @click="onClickDesativar()">
            </div>
        </div>
        <div class="field" v-if="this.model === 'editar'">
            <div class="control">
                <input class="button has-background-primary has-text-white is-uppercase btn" type="button" value="Editar"
                    @click="onClickEditar()">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Prop } from 'vue-property-decorator';
    import { Vue } from 'vue-class-component'; 
    import { Notification } from '@/model/notification'; 
    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';

    export default class EspecialidadeForm extends Vue {
        especialidadeClient!: EspecialidadeClient;
        especialidade: Especialidade = new Especialidade()
        notification: Notification = new Notification()
        
        @Prop({ type: Number, required: false })
         readonly id!: number
        @Prop({ type: String, default: false })
         readonly model!: string
        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
            console.log(this.id)
            console.log(this.model)
        }
        
        public onClickCadastrar(): void {
            
            this.especialidadeClient.postEspecialidade(this.especialidade)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                })
        }
        public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }
        public onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }
    }
        
</script>

<style>
    .btn {
        width: 15rem;
    }
</style>