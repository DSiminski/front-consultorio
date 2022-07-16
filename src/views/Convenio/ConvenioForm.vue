<template>
    <h1 class="title is-4 has-text-left">Cadastrar Convênios</h1>
    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete" ></button>
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
                        <input class="input" type="text" placeholder="Insira um nome" v-model="convenios.nome">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Valor</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Insira um valor"  v-model="convenios.valor">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/convenioView">
                        <input class="button has-background-primary has-text-white is-uppercase btn" value="Voltar">
                    </router-link>
            </div>
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
    </form>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { PageRequest } from '@/model/page-request'
import { PageResponse } from '@/model/page.response'
import { Convenio } from '@/model/convenio.model'
import { ConvenioClient } from '@/client/convenio.client'
import { Notification } from '@/model/notification';
import { Prop } from 'vue-property-decorator'


export default class ConvenioForm extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Convenio> = new PageResponse()
    convenios: Convenio = new Convenio()
    convenioClient!: ConvenioClient
    notification: Notification = new Notification()

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

    public mounted(): void {
        this.convenioClient = new ConvenioClient()
        console.log(this.id);
        if(this.id){
        this.getById(this.id)
        }
    }
    private getById(id: number):void {
            this.convenioClient.getConveniosById(id)
                .then(
                    success => {
                       console.log(success);
                        this.convenios = success
                        console.log(this.convenios);
                    }
                )
        }
    public onClickCadastrar(): void {
        this.convenioClient.postConvenio(this.convenios)
            .then(
                (success: any) => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Convênio Cadastrado com sucesso!!!')
                },
                error => {
                    console.log(error)
                    this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar convênio')
                }
            )
    }

     public onClickEditar():void {
            console.log(this.convenios);
            this.convenioClient.putConvenio(this.convenios)
                .then(
                    success => {
                        this.$router.push('/convenioView')
                    }, error => {
                        this.notification = this.notification.new(true,'notification is-danger','Error: ' + error)
                        this.onClickLimpar()
                    }
                )
        }
    public onClickLimpar(): void {
            this.convenios = new Convenio()
        }
    public onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

}
</script>

<style>
.btn {
    width: 15rem;
}
</style>