import { prisma } from "../../database/clients.js";

export class CreateProdutoController {

    async handle(request, response){

       //JSON -> request.body
       const { Descricao, Valor_unitario} = request.body;

       //Model/DTO/parser -> validacoes 
       if(Descricao == "") {
           return response.status(400).json
           ({
                  message: "dados incompletos, Informe a Descricao"

           });
       }

       //Sanitizacao, limpar string
       //... 

       //Persistencia -> Model
       const produtos =  await prisma.produto.create({
           data: {
            Descricao,
            Valor_unitario
           }
       });

      console.log(produtos);
      return response.json(produtos);

    }

}