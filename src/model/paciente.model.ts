import { Convenio } from "./convenio.model";
import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo-atendimento.model";

export class Paciente extends Pessoa{
    convenio!: Convenio
    tipoAtendimento!: TipoAtendimento
    numeroCartaoConvenio!: string
    dataVencimento!: Date
}