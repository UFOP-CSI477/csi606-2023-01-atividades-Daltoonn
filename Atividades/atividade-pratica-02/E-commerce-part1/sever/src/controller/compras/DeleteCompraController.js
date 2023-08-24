import { PrismaClientKnownRequestError } 
from "@prisma/client/runtime/library.js";
import {prisma} from "../../database/clients.js";

export class DeleteCompraController{
         
    async handle(request, response){

     const { id } = request.body;
     
     
     try{
       const compra = await prisma.compra.delete({
             where:{
                id
             }
          });

         return response.json(compra);
     } catch (error) {

        if( error instanceof PrismaClientKnownRequestError){
              return response.status(400).
                json({
                    message: "Erro na exclusao do compra.",
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