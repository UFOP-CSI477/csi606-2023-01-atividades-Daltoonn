import {prisma } from '../../database/clients.js'

export class GetAllProdutoController {

    async handle(request, responce)
    {
        const produtos = await prisma.produto.findMany({
            select : {
                //definindo oque eu quero que aprarece quando compilo produto
                Descricao: true,
                Valor_unitario: true
              }
        }); 

        return responce.json(produtos);
    }
  
}