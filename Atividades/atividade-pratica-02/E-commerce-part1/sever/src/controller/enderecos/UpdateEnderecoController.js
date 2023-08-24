import {prisma} from "../../database/clients.js";


export class UpdateEnderecoController {



    async handle(request, response) {

        const { id, rua, numero, Complemento, Bairro, telefone} = request.body;

        try {
            const endereco = await prisma.endereco.update({

                where: {
                    id
                },

                data: {
                    rua, 
                    numero, 
                    Complemento, 
                    Bairro, 
                    telefone,
                    updated_at: new Date()
                }

            });

            response.json(endereco);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}