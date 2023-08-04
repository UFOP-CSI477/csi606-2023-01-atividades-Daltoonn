import { PrismaClientKnownRequestError } 
from "@prisma/client/runtime/library.js";
import {prisma} from "../../database/clients.js";

export class DeleteProdutoController{
         
    async handle(request, response){

     const { id } = request.body;
     
     
     try{
       const produto = await prisma.produto.delete({
             where:{
                id
             }
          });

         return response.json(produto);
     } catch (error) {

        if( error instanceof PrismaClientKnownRequestError){
              return response.status(400).
                json({
                    message: "Erro na exclusao do produto.",
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