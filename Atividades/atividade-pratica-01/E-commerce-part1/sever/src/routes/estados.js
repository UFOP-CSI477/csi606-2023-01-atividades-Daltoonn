import {Router} from 'express'
import { GetAllEstadoController } from '../controller/estados/GetAllEstadoController.js';

import { CreateEstadoController } from '../controller/estados/CreateEstadoController.js';

import { GetByIdEstadoController } from '../controller/estados/GetByIdEstadoController.js';

import {UpdateEstadoController} from '../controller/estados/UpdateEstadoController.js';

import { DeleteEstadoController } from '../controller/estados/DeleteEstadoController.js';

const estadoRouter = Router();

const getAllEstadoController =  new GetAllEstadoController();

const createEstadoController = new CreateEstadoController();

const getByIdEstadoController = new GetByIdEstadoController();

const updateEstadoController = new UpdateEstadoController();

const deleteEstadoController = new DeleteEstadoController();

//get all
estadoRouter.get('/estados', getAllEstadoController.handle);

//get By Id
estadoRouter.get('/estados/:id',getByIdEstadoController.handle);


//create
estadoRouter.post('/estados',createEstadoController.handle);

//put(coisa pequena) ou patch(coisa grade)
//update
estadoRouter.put('/estados',updateEstadoController.handle);

//delete
estadoRouter.delete('/estados',deleteEstadoController.handle)

// export -- rouuter
export {estadoRouter}