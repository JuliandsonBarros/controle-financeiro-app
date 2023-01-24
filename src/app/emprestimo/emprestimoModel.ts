import { Usuario } from './../usuario/usuarioModel';

export class Emprestimo{
    id_emprestimo? : number;
    cod_valor? : number;
    dta_emprestimo?: Date;
    cod_numeroParcelas? : number;
    cod_taxaJuros? : number;
    usuario = new Usuario();
}