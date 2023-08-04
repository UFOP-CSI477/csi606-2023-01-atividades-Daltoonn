import { prisma } from "../../database/clients.js"


export class GetAllEnderecoController {

    async handle(request, responce)
    {
      try{

        const endereco = await prisma.endereco.findMany({
                  select : {
                    //definindo oque eu quero que aprarece quando compilo cidades
                    id: true,
                    rua: true,
                    numero: true,
                    Complemento: true,
                    Bairro: true,
                    telefone: true,
                    cidade: {
                            select: {
                                  id: true,
                                  nome: true,                          
                            }
                    }
                  }
         
        });

        return responce.json(endereco);


      }catch (error){
        
        return responce.status(500).json(error);

      }


    }
  
}