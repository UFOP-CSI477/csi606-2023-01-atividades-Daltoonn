import EnderecoDTO from "./EnderecoDTO";

interface CompraDTO {
    id?: number 
    data: string;
    endereco?: EnderecoDTO;
    created_at?: string;
    updated_at?: string;
}

export default CompraDTO;