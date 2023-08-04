import { prisma } from "../../database/clients.js";

export class CreateEnderecoController {

    async handle(request, response){

       //JSON -> request.body
       const {rua, numero, Complemento, Bairro, telefone, cidade_id} = request.body;

       //Model/DTO/parser -> validacoes 
       if(rua == "") {
           return response.status(400).json
           ({
                  message: "dados incompletos"

           });
       }

       //Sanitizacao, limpar string
       //... 

       //Persistencia -> Model
       const endereco =  await prisma.endereco.create({
           data: {
                rua,
                numero,
                Complemento,
                Bairro,
                telefone,

                cidade: {
                    connect:{
                        //cidade_id da tabela de cidade
                         id: cidade_id
                    }
             }



           }
       });

      console.log(endereco);
      return response.json(endereco);

    }

}