import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa{
especialidade!: Especialidade
crm!: string
porcenParticipacao!: number
consultorio!: string
valor!: number
}