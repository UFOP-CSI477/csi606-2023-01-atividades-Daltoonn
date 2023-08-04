import { prisma } from "../../database/clients.js"


export class GetAllCompraController {

    async handle(request, responce)
    {
      try{

        const compra = await prisma.compra.findMany({
                  select : {
                    //definindo oque eu quero que aprarece quando compilo enderecos
                    dataa: true,
                    endereco: {
                            select: {
                                id: true,
                                rua: true,
                                numero: true,
                                Complemento: true,
                                Bairro: true,
                                telefone: true,                       
                            }
                    }
                  }
         
        });

        return responce.json(compra);


      }catch (error){
        
        return responce.status(500).json(error);

      }


    }
  
}