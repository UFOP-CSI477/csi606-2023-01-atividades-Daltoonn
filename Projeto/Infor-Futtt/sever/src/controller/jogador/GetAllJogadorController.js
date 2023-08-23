import { prisma } from "../../database/clients.js"


export class GetAllJogadorController {

    async handle(request, responce)
    {
      try{

        const jogador = await prisma.Jogador.findMany({
                  select : {
                    //definindo oque eu quero que aprarece quando compilo jogador
                    id: true,
                    nome: true,
                    altura: true,
                    idade: true,
                    posicao: true,
                    created_at: true,
                    updated_at: true,
                    Time: {
                            select: {
                                  id: true,
                                  nome: true,
                                  sigla: true
                            }
                    }
                  }
         
        });

        return responce.json(jogador);


      }catch (error){
        
        return responce.status(500).json(error);

      }


    }
  
}