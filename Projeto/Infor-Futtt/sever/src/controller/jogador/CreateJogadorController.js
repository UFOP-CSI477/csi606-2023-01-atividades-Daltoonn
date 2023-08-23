import { prisma } from "../../database/clients.js";

export class CreateJogadorController {

    async handle(request, responce){

       const { nome, altura, idade, posicao, estado_id} = request.body;

       const jogador = await prisma.Jogador.create({
               
        data: {
             nome,
             altura,
             idade,
             posicao,
            
             //estado refencia que foi do prisma
             Time: {
                    connect:{
                        //jogador_id da tabela de estado
                         id: estado_id
                    }
             }

        }


       });
         
        //retorno da rota (requisicao)
        return responce.json(jogador)

    }


}