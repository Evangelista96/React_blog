import type Postagem from "./Postagem";

export interface Tema {
    id: number;
    descricao: string;
    postagems?: Postagem[] | null;
}