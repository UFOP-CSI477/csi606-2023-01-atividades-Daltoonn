import { PrismaClientKnownRequestError } 
from "@prisma/client/runtime/library.js";
import {prisma} from "../../database/clients.js";

export class DeleteEnderecoController{
         
    async handle(request, response){

     const { id } = request.body;
     
     
     try{
       const endereco = await prisma.endereco.delete({
             where:{
                id
             }
          });

         return response.json(endereco);
     } catch (error) {

        if( error instanceof PrismaClientKnownRequestError){
              return response.status(400).
                json({
                    message: "Erro na exclusao do endereco.",
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