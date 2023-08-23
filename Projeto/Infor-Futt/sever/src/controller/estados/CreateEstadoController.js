import { prisma } from "../../database/clients.js";

export class CreateEstadoController {

    async handle(request, response){

       //JSON -> request.body
       const {nome, sigla} = request.body;

       //Model/DTO/parser -> validacoes 
       if(nome == "") {
           return response.status(400).json
           ({
                  message: "dados incompletos, Informe o nome e a sigla"

           });
       }

       //Sanitizacao, limpar string
       //... 

       //Persistencia -> Model
       const estado =  await prisma.Time.create({
           data: {
                 nome,
                 sigla
           }
       });

      console.log(estado);
      return response.json(estado);

    }

}