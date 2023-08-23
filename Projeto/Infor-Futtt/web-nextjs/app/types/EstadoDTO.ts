//isso é typescript entao estamos evitando de dar erro de tipagem isso é bom typescript
//cada elemento do getAllEstados vai ser tratado no EstadoInterface
// ?elemento significa que é opcional, se nao tiver ? = obrigatorio
interface EstadoDTO {
    id?: number;
    nome: string;
    sigla: string;
    created_at?: string;
    updated_at?: string;
}

export default EstadoDTO;