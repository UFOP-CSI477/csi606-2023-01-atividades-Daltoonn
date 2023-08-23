import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { prisma } from "../../database/clients.js";

export class DeleteJogadorController {
  async handle(request, response) {
    try {
      const { id } = request.body;
      console.log(id);

      const jogador = await prisma.Jogador.delete({
        where: {
          id,
        },
      });

      return response.json(jogador);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return response.status(400).json({
          message: "Erro na exclusão da jogador.",
          error,
        });
      }

      return response.status(500).json({
        error,
        id,
      });
    }
  }
}