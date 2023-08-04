import { prisma } from "../../database/clients.js"


export class GetAllCidadeController {

    async handle(request, responce)
    {
      try{

        const cidades = await prisma.cidade.findMany({
                  select : {
                    //definindo oque eu quero que aprarece quando compilo cidades
                    id: true,
                    nome: true,
                    estado: {
                            select: {
                                  id: true,
                                  nome: true,
                                  sigla: true
                            }
                    }
                  }
         
        });

        return responce.json(cidades);


      }catch (error){
        
        return responce.status(500).json(error);

      }


    }
  
}