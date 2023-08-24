import { Router, response } from "express"; 'express';


const mainRouter = Router();

//criado rotas
mainRouter.get('/', (request,response)=>{
 
    response.status(401).send
    ("<h1>Unauthorized.</h1>");

});


mainRouter.get('/admin', (request, response)=>{
   response.json({
    message: "API Sever is running"
   });
});

//exportando para o sever
export {mainRouter};