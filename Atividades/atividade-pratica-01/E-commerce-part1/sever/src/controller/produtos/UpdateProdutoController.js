import {prisma} from "../../database/clients.js";


export class UpdateProdutoController {



    async handle(request, response) {

        const { id, Descricao, Valor_unitario} = request.body;

        try {
            const produto = await prisma.produto.update({

                where: {
                    id
                },

                data: {
                    Descricao,
                    Valor_unitario,
                    updated_at: new Date()
                }

            });

            response.json(produto);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}