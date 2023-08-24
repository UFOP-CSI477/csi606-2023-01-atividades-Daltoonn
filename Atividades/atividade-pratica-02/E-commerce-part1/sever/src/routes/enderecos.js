import { Router } from "express";

import { GetAllEnderecoController } from "../controller/enderecos/GetAllEnderecoController.js";
import { CreateEnderecoController } from "../controller/enderecos/CreateEnderecoController.js";
import { DeleteEnderecoController } from '../controller/enderecos/DeleteEnderecoController.js';
import { UpdateEnderecoController } from '../controller/enderecos/UpdateEnderecoController.js';


const enderecoRouter = Router();

// Get all - (R)
const getAllEnderecoController = new GetAllEnderecoController();
enderecoRouter.get('/enderecos',getAllEnderecoController.handle);

// Create - (C)
const createEnderecoController = new CreateEnderecoController();
enderecoRouter.post('/enderecos',createEnderecoController.handle)

// Delete - (D)
const deleteEnderecoController = new DeleteEnderecoController();
enderecoRouter.delete('/enderecos',deleteEnderecoController.handle)

// Update - (U)
const updateEnderecoController = new UpdateEnderecoController();
enderecoRouter.put('/enderecos',updateEnderecoController.handle);




//Export - Router

export{enderecoRouter}