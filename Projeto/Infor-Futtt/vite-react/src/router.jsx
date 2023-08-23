
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App";
import ListEstados from "./components/estados/ListEstados.jsx";

//compontene principal
const AppRouters = () => {

    
    return(

//todas as rotas ele  vai return     
//dentro de Routes vai ter todas as rotas
//cada rota vai ter que contruir

            <BrowserRouter>
                <Routes>
                      <Route path="/" element={<App />} 
                      
                      />
                        
                        <Route path="/estados" element={<ListEstados/>} 
                      
                      />

                </Routes>
            
            </BrowserRouter>


    )




}

export default AppRouters;