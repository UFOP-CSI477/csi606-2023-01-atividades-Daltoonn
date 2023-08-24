import { PrismaClientKnownRequestError } 
from "@prisma/client/runtime/library.js";
import {prisma} from "../../database/clients.js";

export class DeleteEstadoController{
         
    async handle(request, response){

     const { id } = request.body;
     
     
     try{
       const estado = await prisma.estado.delete({
             where:{
                id
             }
          });

         return response.json(estado);
     } catch (error) {

        if( error instanceof PrismaClientKnownRequestError){
              return response.status(400).
                json({
                    message: "Erro na exclusao do estado.",
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