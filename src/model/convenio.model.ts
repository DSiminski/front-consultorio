import { AbstractEntity } from "./abstract-entity.model";

export class Convenio extends AbstractEntity{
    nome!: String
    valor!: number
    numeroCartaoConvenio!: String
}