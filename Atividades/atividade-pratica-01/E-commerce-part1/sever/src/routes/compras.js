import { Router } from "express";

import { GetAllCompraController } from "../controller/compras/GetAllCompraController.js";
import { CreateCompraController } from "../controller/compras/CreateCompraController.js";
import { DeleteCompraController } from '../controller/compras/DeleteCompraController.js';
import { UpdateCompraController } from '../controller/compras/UpdateCompraController.js';


const compraRouter = Router();

// Get all - (R)
const getAllCompraController = new GetAllCompraController();
compraRouter.get('/compras',getAllCompraController.handle);

// Create - (C)
const createCompraController = new CreateCompraController();
compraRouter.post('/compras',createCompraController.handle)

// Delete - (D)
const deleteCompraController = new DeleteCompraController();
compraRouter.delete('/compras',deleteCompraController.handle)

// Update - (U)
const updateCompraController = new UpdateCompraController();
compraRouter.put('/compras',updateCompraController.handle);




//Export - Router

export{compraRouter}