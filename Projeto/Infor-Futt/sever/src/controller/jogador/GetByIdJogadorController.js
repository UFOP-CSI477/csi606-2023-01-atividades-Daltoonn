import { prisma } from "../../database/clients.js";

export class GetByIdJogadorController {
  async handle(request, response) {
    const { id } = request.params;

    const jogador = await prisma.Jogador.findUniqueOrThrow({
      where: {
        id: parseInt(id),
      },
    });

    return response.json(jogador);
  }
}