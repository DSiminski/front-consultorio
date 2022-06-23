import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa{
especialidade!: Especialidade
crm!: String
porcenParticipacao!: number
consultorio!: String
}