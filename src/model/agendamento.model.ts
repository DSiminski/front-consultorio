import { AbstractEntity } from "./abstract-entity.model";
import { Medico } from "./medico.model";
import { Paciente } from "./paciente.model";
import { Secretaria } from "./secretaria.model";
import { StatusAgendamento } from "./status-agendamento.model";

export class Agendamento extends AbstractEntity{
paciente! : Paciente
medico! : Medico 
secretaria! : Secretaria   
statusAgendamento! : StatusAgendamento
dataDe! : Date
dataAte! : Date
encaixe! : boolean
}