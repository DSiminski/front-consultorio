import { Convenio } from "./convenio.model";
import { Pessoa } from "./pessoa.model";
import { TipoAgendamento } from "./tipo-agendamento.model";

export class Paciente extends Pessoa{
    convenio!: Convenio
    tipoAtendimento!: TipoAgendamento
    numeroCartaoConvenio!: String
    dataVencimento!: Date
}