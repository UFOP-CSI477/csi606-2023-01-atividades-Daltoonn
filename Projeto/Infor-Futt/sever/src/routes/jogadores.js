import { Router } from "express";

import { GetAllJogadorController } from "../controller/jogador/GetAllJogadorController.js";

import { CreateJogadorController } from "../controller/jogador/CreateJogadorController.js";

import { GetByIdJogadorController } from "../controller/jogador/GetByIdJogadorController.js";

import { UpdateJogadorController } from "../controller/jogador/UpdateJogadorController.js"

import { DeleteJogadorController } from "../controller/jogador/DeleteJogadorController.js"

const jogadorRouter = Router();


// Get all - (R)
const getAllJogadorController = new GetAllJogadorController();
jogadorRouter.get('/jogadores', getAllJogadorController.handle);

// Get By Id
const getByIdJogadorController = new GetByIdJogadorController();
jogadorRouter.get('/jogadores/:id', getByIdJogadorController.handle);

// Create - (C)
const createJogadorController = new CreateJogadorController();
jogadorRouter.post('/jogadores', createJogadorController.handle);

// Update
const updateJogadorController = new UpdateJogadorController();
jogadorRouter.put('/jogadores', updateJogadorController.handle);

// Delete
const deleteJogadorController = new DeleteJogadorController();
jogadorRouter.delete('/jogadores', deleteJogadorController.handle);

// Export - router
export { jogadorRouter }