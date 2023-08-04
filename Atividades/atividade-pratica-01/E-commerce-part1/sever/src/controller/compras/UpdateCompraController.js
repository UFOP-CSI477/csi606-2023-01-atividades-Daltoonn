import {prisma} from "../../database/clients.js";


export class UpdateCompraController {



    async handle(request, response) {

        const {dataa, endereco_id} = request.body;

        try {
            const compra = await prisma.compra.update({

                where: {
                    id
                },

                data: {
                    dataa,
                    endereco_id,
                    updated_at: new Date()
                }

            });

            response.json(compra);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}