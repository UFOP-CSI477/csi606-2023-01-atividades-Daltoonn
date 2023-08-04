import { prisma } from "../../database/clients.js";

export class CreateCompraController {

    async handle(request, response){

       //JSON -> request.body
       const {dataa, endereco_id} = request.body;

       //Persistencia -> Model
       const compra =  await prisma.compra.create({
           data: {
                    dataa,
                    endereco:{
                    connect:{
                        //cidade_id da tabela de cidade
                         id: endereco_id
                    }
             }



           }
       });

      console.log(compra);
      return response.json(compra);

    }

}