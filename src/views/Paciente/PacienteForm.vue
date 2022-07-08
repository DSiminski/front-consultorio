<template>
    <h1 class="title is-4 has-text-left">Cadastrar Pacientes</h1>
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
                        <input class="input" type="text" placeholder="Insira um nome" v-model="paciente.nome">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Login</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um nome de usuario" v-model="paciente.login">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">RG</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um rg" v-model="paciente.rg">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Telefone</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um telefone" v-model="paciente.telefone">
                    </div>
                </div>
                 <div class="field">
                    <label class="label has-text-left">Celular</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um celular" v-model="paciente.celular">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Sexo</label>
                    <div class="control is-flex">
                        <div class="select"> 
                            <select v-model="paciente.sexo">
                                <option value="">Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outros</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Convênio</label>
                    <div class="control is-flex">
                        <div class="select"> 
                            <select v-model="paciente.convenio">
                                <option value="">Selecione</option>
                               <option :value="convenio" v-for="convenio in convenioView" :key ="convenio.id">
                                    {{convenio.nome}}
                                
                               </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Numero do Cartão</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira o numero do cartão" v-model="paciente.numeroCartaoConvenio">
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Insira um email" v-model="paciente.email">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Senha</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Insira uma senha" v-model="paciente.senha">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">CPF</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira um cpf" v-model="paciente.cpf">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Nacionalidade</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Insira uma nacionalidade" v-model="paciente.nacionalidade">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Tipo De Atendimento</label>
                    <div class="control is-flex">
                        <div class="select"> 
                            <select v-model="paciente.tipoAtendimento">
                                <option value="">Selecione</option>
                                <option value="particular">Particular</option>
                                <option value="convenio">Convenio</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Data De Vencimento</label>
                    <div class="control">
                        <input class="input" type="datetime-local" v-model="paciente.dataVencimento">
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/pacienteView">
                        <input class="button has-background-primary has-text-white is-uppercase btn" value="Voltar">
                    </router-link>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="button has-background-primary has-text-white is-uppercase btn" 
                    type="button" value="Cadastrar" @click="postPaciente()">
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">

    import { Vue } from 'vue-class-component'; 
    import { Notification } from '@/model/notification'; 
    import { Paciente } from '@/model/paciente.model';
    import { PacienteClient } from '@/client/paciente.client';
    import { PageRequest } from '@/model/page-request';
    import { PageResponse } from '@/model/page.response';
    import { Convenio } from '@/model/convenio.model';
    import { ConvenioClient } from '@/client/convenio.client';
    import { TipoAtendimento } from '@/model/tipo-atendimento.model'
    
export default class PacienteForm extends Vue {
    pageRequest: PageRequest = new PageRequest()
    pageResponse: PageResponse<Convenio> = new PageResponse()
    pacienteClient!: PacienteClient
    paciente: Paciente = new Paciente()
    notification: Notification = new Notification()
    convenio: Convenio = new Convenio()
    convenioClient!: ConvenioClient
    convenioView: Convenio[] = []
    
    public mounted(): void {
        this.pacienteClient = new PacienteClient()
        this.convenioClient = new ConvenioClient()
        this.getConvenios()
    }
    public postPaciente(): void {
        this.pacienteClient.postPaciente(this.paciente).then(() => {
            this.notification = this.notification.new(true, 'notification is-success', 'Paciente cadastrado com sucesso!!')
            this.onClickLimpar();
        }).catch((error) => {
            console.log(error);
            this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar Paciente')
            this.onClickLimpar();
        })
    }
    public getConvenios(): void {
        this.convenioClient.getConvenios(this.pageRequest)
            .then(
                success => {
                    this.pageResponse = success
                    this.convenioView = this.pageResponse.content
                },
                error => console.log(error)
            )
    }
       
        // private onClickDesativar():void{
        //     this.pacienteClient.desativar(this.paciente).then((success: any)=>{
        //         console.log("teste")
        //     })
               
        // }
    public onClickFecharNotificacao(): void {
        this.notification = new Notification()
    }
    public onClickLimpar(): void {
        this.paciente = new Paciente()
    }
}

</script>

<style>
    .select, .select select {
        width: 100%;
    }
    .btn {
        width: 100%;
    }
</style>