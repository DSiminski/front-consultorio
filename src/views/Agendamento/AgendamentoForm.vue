<template>
    <h1 class="title is-4 has-text-left">Cadastrar Agendamento</h1>
    <div class="columns" v-if="notification.ativo">
        <div class="column is-12">
            <div :class="notification.classe">
                <button @click="onClickFecharNotificacao()" class="delete"></button>
                {{ notification.message }}
            </div>
        </div>
    </div>
    <form>
            <div class="column is-5">
                <div class="field">
                    <label class="label has-text-left">Paciente</label>
                    <div class="control is-flex">
                        <div class="select">
                            <select v-model="agendamentos.paciente">
                                <option value="">Selecione</option>
                                <option v-for="paciente in this.pacientes" :key="paciente.id" :value="paciente">{{paciente.nome}}</option>
                            </select>
                        </div>
                    </div>
                <div class="field">
                    <label class="label has-text-left">Medico</label>
                    <div class="control is-flex">
                         <div class="select">
                            <select v-model="agendamentos.medico">
                                <option value="">Selecione</option>
                                <option v-for="medico in this.medicos" :key="medico.id" :value="medico">{{medico.nome}}</option>
                            </select>
                        </div>
                    </div>            
                </div>
                <div class="field">
                    <label class="label has-text-left">Secretaria</label>
                    <div class="control is-flex">
                         <div class="select">
                            <select v-model="agendamentos.secretaria">
                                <option value="">Selecione</option>
                                <option v-for="secretaria in this.secretarias" :key="secretaria.id" :value="secretaria">{{secretaria.nome}}</option>
                            </select>
                        </div>
                    </div>            
                </div>
                <div class="field">
                    <label class="label has-text-left">Data inicio da consulta</label>
                    <div class="control">
                        <input class="input" type="datetime-local" placeholder="Insira data de inicio " v-model="agendamentos.dataDe">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Data fim da consulta</label>
                    <div class="control">
                        <input class="input" type="datetime-local" placeholder="Insira data do fim" v-model="agendamentos.dataAte">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-left">Status</label>
                    <div class="control is-flex">
                        <div class="select">
                            <select v-model="agendamentos.statusAgendamento">
                                <option value="">Selecione</option>
                                <option value="pendente">Pendente</option>
                                <option value="aprovado">Aprovado</option>
                                <option value="cancelado">Cancelado</option>
                                <option value="compareceu">Compareceu</option>
                                <option value="ncompareceu">Não Compareceu</option>  
                                <option value="rejeitado">Rejeitado</option>    
                            </select>    
                        </div>
                    </div>
                </div>
                <div class="field">
                     <label class="checkbox">Encaixe</label>
                    <div class="control">
                        <input class="checkbox" type="checkbox" v-model="agendamentos.encaixe">
                    </div>
                </div>
            </div> 
        </div>
        <div class="column is-10 is-flex is-justify-content-space-between p-5">
            <div class="field">
                <div class="control">
                    <router-link to="/agendamentoView">
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
import { PageResponse } from "../../model/page.response";
import { PageRequest } from "../../model/page-request";
import { Agendamento } from "../../model/agendamento.model";
import { AgendamentoClient } from "../../client/agendamento.client";
import { Notification } from "../../model/notification";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PacienteClient } from "../../client/paciente.client";
import { Paciente } from "../../model/paciente.model";
import { MedicoClient } from "../../client/medico.client";
import { Medico } from "../../model/medico.model";
import { Secretaria } from "@/model/secretaria.model";
import { SecretariaClient} from "@/client/secretaria.client";

export default class AgendamentoForm extends Vue{
    pageRequest: PageRequest = new PageRequest()
    pageResponseSecretaria: PageResponse<Secretaria> =new PageResponse()
    pageResponseMedico: PageResponse<Medico> =new PageResponse()
    pageResponsePaciente: PageResponse<Paciente> =new PageResponse()
    agendamentoClient!: AgendamentoClient
    agendamentos: Agendamento = new Agendamento()
    notification: Notification = new Notification()
    pacienteClient!: PacienteClient
    medicoClient!: MedicoClient
    secretariaClient!: SecretariaClient
    medicos: Medico[] = []
    pacientes: Paciente[]= []
    secretarias: Secretaria[]= []

        @Prop({type: Number, required: false})
        private readonly id!:number

        @Prop({type: String, required: false})
        private readonly model!:string

    public mounted(): void{
        this.agendamentoClient = new AgendamentoClient()
        this.pacienteClient = new PacienteClient()
        this.medicoClient = new MedicoClient()
        this.secretariaClient = new SecretariaClient()
        this.getPacientes()
        this.getMedicos()
        this.getSecretarias()
        this.agendamentos.encaixe = false
        if(this.id){
            this.getById(this.id)
        }
    }
    private getPacientes():void {
      this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
        .then(
          success => {
            this.pageResponsePaciente = success
            this.pacientes = this.pageResponsePaciente.content
          },
          error => console.log(error)
        )
    }
     getMedicos(): void {
    this.medicoClient.getMedicos(this.pageRequest).then(success => {
      this.pageResponseMedico = success;
      this.medicos = this.pageResponseMedico.content
    }).catch(error => { console.log(error) })
  }
   getSecretarias(): void {
      this.secretariaClient.getSecretarias(this.pageRequest).then(success=>{
        this.pageResponseSecretaria = success;
        this.secretarias = this.pageResponseSecretaria.content
      }).catch(error=> {console.log(error)})
    }
    private getById(id: number):void {
            this.agendamentoClient.getAgendamentoById(id)
                .then(
                    success => {
                        this.agendamentos = success
                    }
                )
        }
    public onClickCadastrar(): void {
        this.agendamentoClient.postAgendamento(this.agendamentos)
        
            .then(
                (success: any) => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Agendamento Cadastrado com sucesso!!!')

                },
                (error: any) => {
                    console.log(error)
                    this.notification = this.notification.new(true, 'notification is-danger', 'Erro ao cadastrar Agendamento')
                }
            )
    }
    private onClickEditar():void {
            this.agendamentoClient.putAgendamento(this.agendamentos)
                .then(
                    success => {
                        this.$router.push('/agendamentoView')
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
        this.agendamentos =new Agendamento()
    }
}
</script>