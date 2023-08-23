import express from 'express'

import {mainRouter} from './routes/main.js'

import { estadoRouter } from './routes/estados.js';
import { jogadorRouter } from './routes/jogadores.js';

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
app.use(jogadorRouter)


//SERVER - START/LISTEN;
app.listen(PORT, () =>{
    console.log(`[SERVER] Sever is running 
    on port ${PORT}`);

});