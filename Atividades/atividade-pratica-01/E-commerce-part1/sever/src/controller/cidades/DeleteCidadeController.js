import { PrismaClientKnownRequestError } 
from "@prisma/client/runtime/library.js";
import {prisma} from "../../database/clients.js";

export class DeleteCidadeController{
         
    async handle(request, response){

     const { id } = request.body;
     
     
     try{
       const cidade = await prisma.cidade.delete({
             where:{
                id
             }
          });

         return response.json(cidade);
     } catch (error) {

        if( error instanceof PrismaClientKnownRequestError){
              return response.status(400).
                json({
                    message: "Erro na exclusao do cidade.",
                    error
                });
        }

        return response.status(500).json
        ({
           error,
           id

        });

     }


    }


}