import { prisma } from "../../database/clients.js";

export class CreateCidadeController {

    async handle(request, responce){

       const { nome, estado_id} = request.body;

       const cidade = await prisma.cidade.create({
               
        data: {
             nome,
            
             //estado refencia que foi do prisma
             estado: {
                    connect:{
                        //estado_id da tabela de estado
                         id: estado_id
                    }
             }

        }


       });
         
        //retorno da rota (requisicao)
        return responce.json(cidade)

    }


}