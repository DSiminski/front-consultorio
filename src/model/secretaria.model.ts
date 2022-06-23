import { Pessoa } from "./pessoa.model";

export class Secretaria extends Pessoa {
    salario! : number;
    data_contratacao! : Date;
    pis! : string;
}