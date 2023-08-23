import {prisma } from '../../database/clients.js'

export class GetAllEstadoController {

    async handle(request, responce)
    {
        const estados = await prisma.Time.findMany({
           include: {
                Jogadors: true
           }
        }); 

        return responce.json(estados);
    }
  
}