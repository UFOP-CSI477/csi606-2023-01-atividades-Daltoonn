import { Router } from "express";
import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";
import { CreateCidadeController } from "../controller/cidades/CreateCidadeController.js";
import { DeleteCidadeController } from "../controller/cidades/DeleteCidadeController.js";
import { UpdateCidadeController } from "../controller/cidades/UpdateCidadeController.js";


const cidadeRouter = Router();

// Get all - (R)
const getAllEstadoController = new GetAllCidadeController();
cidadeRouter.get('/cidades',getAllEstadoController.handle);

// Create - (C)
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades',createCidadeController.handle)


// Delete - (D)
const deleteCidadeController = new DeleteCidadeController();
cidadeRouter.delete('/cidades',deleteCidadeController.handle)

// Update - (U)
const updateCidadeController = new UpdateCidadeController();
cidadeRouter.put('/cidades',updateCidadeController.handle);


//Export - Router

export{cidadeRouter}