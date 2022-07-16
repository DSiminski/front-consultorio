<template>
    <h1 class="title is-4 has-text-left">Cadastrar Médicos</h1>
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
                        <input class="input" type="text" placeholder="Insira um nome" v-model="medicos.nome">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Login</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome de usuario" v-model="medicos.login">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">RG</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um rg" v-model="medicos.rg">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Telefone</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um telefone" v-model="medicos.telefone">
                    </div>
                </div>
                 <div class="field">
                    <label class="label has-text-left">Celular</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um celular"
                            v-model="medicos.celular">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Sexo</label>
                    <div class="control is-flex">
                        <div class="select"  > 
                            <select v-model="medicos.sexo">
                                <option value="">Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Consultório</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome de consultório" v-model="medicos.consultorio">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CRM</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um CRM" v-model="medicos.crm">
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Insira um email" v-model="medicos.email">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Senha</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Insira uma senha" v-model="medicos.senha">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CPF</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um cpf" v-model="medicos.cpf">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Nacionalidade</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira uma nacionalidade" v-model="medicos.nacionalidade">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Especialidade</label>
                    <div class="control is-flex">
                        <div class="select"> 
                            <select v-model="medicos.especialidade">
                                <option value="">Selecione</option>
                                <option v-for="especialidade in this.especialidadeList" :key="especialidade.id" :value="especialidade">{{especialidade.nome}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Porcentagem De Participação</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Insira o valor da %" v-model="medicos.porcenParticipacao">
                    </div>
                </div>
                  <div class="field">
                    <label class="label has-text-left">Valor</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Insira o valor" v-model="medicos.valor">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/medicoView">
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

    import { Vue } from 'vue-class-component';
    import { Medico } from '@/model/medico.model';
    import { Notification } from '@/model/notification';
    import { MedicoClient } from '@/client/medico.client';
    import { Especialidade } from '@/model/especialidade.model';
    import { EspecialidadeClient } from '@/client/especialidade.client';
    import { PageRequest } from '@/model/page-request'
    import { PageResponse } from '@/model/page.response'
    import { Prop } from 'vue-property-decorator'


export default class MedicoForm extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Especialidade> = new PageResponse()
    medicoClient!: MedicoClient
    medicos: Medico = new Medico()
    notification: Notification = new Notification()
    especialidade: Especialidade = new Especialidade()
    especialidadeClient!: EspecialidadeClient
    especialidadeList: Especialidade[] = []
    
        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

    public mounted(): void {
        this.medicoClient = new MedicoClient()
        this.especialidadeClient = new EspecialidadeClient()
        this.getEspecialidade()
        if(this.id){
        this.getById(this.id)
        }
    }
    private getById(id: number):void {
            this.medicoClient.getMedicosById(id)
                .then(
                    success => {
                        this.medicos = success
                    }
                )
        }
    public onClickCadastrar(): void {
        this.medicoClient.postMedico(this.medicos)
           .then(
            (success: any)=>{
                this.notification = this.notification.new(true, 'notification is-success', 'Médico Cadastrado com sucesso!!!')
               
            },
            error => {
                    console.log(error)
                    this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar Médico')
                }
            )
    }
    public getEspecialidade(): void {
        this.especialidadeClient.getEspecialidades(this.pageRequest)
            .then(
                success => {
                    this.pageResponse = success
                    this.especialidadeList = this.pageResponse.content
                },
                error => console.log(error)
            )
    }
     private onClickEditar():void {
            this.medicoClient.putMedico(this.medicos)
                .then(
                    success => {
                        this.$router.push('/medicoView')
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
        this.medicos = new Medico()
    }
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