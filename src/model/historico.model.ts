import { AbstractEntity } from "./abstract-entity.model";
import { Agendamento } from "./agendamento.model";
import { Paciente } from "./paciente.model";
import { Secretaria } from "./secretaria.model";
import { StatusAgendamento } from "./status-agendamento.model";

export class Historico extends AbstractEntity{
    agendamento!: Agendamento
    paciente !: Paciente
    secretaria !: Secretaria
    statusAgendamento!: StatusAgendamento
    data!: Date
    observacao!: string
}