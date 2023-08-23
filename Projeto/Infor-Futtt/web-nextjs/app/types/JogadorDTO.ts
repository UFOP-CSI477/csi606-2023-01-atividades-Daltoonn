import EstadoDTO from "./EstadoDTO";

interface JogadorDTO {
    id?: number 
    nome: string;
    altura: true,
    idade: true,
    posicao: true,
    Time?: EstadoDTO;
    created_at?: string;
    updated_at?: string;
}

export default JogadorDTO;