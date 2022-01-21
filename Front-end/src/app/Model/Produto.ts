import { Usuario } from "./Usuario";

export class Produto {
    public id: number;
    public nomeProduto: string;
    public fornecedor: string;
    public valor: string;
    public foto: string;
    public Usuario: Usuario;
}