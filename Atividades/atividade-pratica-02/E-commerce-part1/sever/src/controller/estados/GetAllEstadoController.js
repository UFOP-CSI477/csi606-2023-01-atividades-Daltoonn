import {prisma } from '../../database/clients.js'

export class GetAllEstadoController {

    async handle(request, responce)
    {
        const estados = await prisma.estado.findMany({
           include: {
                cidades: true
           }
        }); 

        return responce.json(estados);
    }
  
}