import express from 'express'

import {mainRouter} from './routes/main.js'

import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';
import { enderecoRouter } from './routes/enderecos.js';
import { compraRouter } from './routes/compras.js';
import { produtoRouter } from './routes/produtos.js';

import cors from 'cors'


const app = express();
//mensagens devem ser json 
app.use(express.json());


const PORT = 5555;

//ROUTES:
//app cors usa sempre antes da galera pois ele que vai validar 
app.use(cors());
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(enderecoRouter);
app.use(compraRouter);
app.use(produtoRouter);


//SERVER - START/LISTEN;
app.listen(PORT, () =>{
    console.log(`[SERVER] Sever is running 
    on port ${PORT}`);

});