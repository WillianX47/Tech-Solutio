import { Produto } from "./Produto";

export class Usuario {
    public id: number;
    public nome: string;
    public senha: string;
    public usuario: string;
    public meusProdutos: Produto[];
}