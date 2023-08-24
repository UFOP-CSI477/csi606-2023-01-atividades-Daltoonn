import CidadeDTO from "./CidadeDTO";

interface EnderecoDTO {
    id?: number 
    rua:        String;
    numero:      String;
    Complemento: String;
    Bairro:      String;
    telefone:    String;
   
    cidade?: CidadeDTO;
    created_at?: string;
    updated_at?: string;
}

export default EnderecoDTO;