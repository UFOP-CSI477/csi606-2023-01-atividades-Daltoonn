import { prisma } from "../../database/clients.js";

export class UpdateJogadorController {
  async handle(request, response) {
    const { id, nome, estado_id } = request.body;

    console.log(request.body)

    try {
      const jogador = await prisma.Jogador.update({
        where: {
          id,
        },

        data: {
          nome,
          Time_id:estado_id,
          updated_at: new Date(),
        },
      });

      response.json(jogador);
    } catch (error) {
      console.log(error)
      response.status(400).json({
        message: "Erro na solicitação.",
        error,
      });
    }
  }
}
