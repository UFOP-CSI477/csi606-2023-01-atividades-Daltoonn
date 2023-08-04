import { Router } from "express";

import { GetAllProdutoController } from '../controller/produtos/GetAllProdutoController.js';
import { CreateProdutoController } from '../controller/produtos/CreateProdutoController.js';
import { DeleteProdutoController } from '../controller/produtos/DeleteProdutoController.js';
import { UpdateProdutoController } from '../controller/produtos/UpdateProdutoController.js';


const produtoRouter = Router();

// Get all - (R)
const getAllProdutoController = new GetAllProdutoController();
produtoRouter.get('/produtos',getAllProdutoController.handle);

// Create - (C)
const createProdutoController = new CreateProdutoController();
produtoRouter.post('/produtos',createProdutoController.handle)

// Delete - (D)
const deleteProdutoController = new DeleteProdutoController();
produtoRouter.delete('/produtos',deleteProdutoController.handle)

// Update - (U)
const updateProdutoController = new UpdateProdutoController();
produtoRouter.put('/produtos',updateProdutoController.handle);




//Export - Router

export{produtoRouter}