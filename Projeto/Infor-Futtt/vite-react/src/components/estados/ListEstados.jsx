//Hucks ajudam a identificar e tratar o codigo
import { useState , useEffect} from "react";


import api from "../../services/api.js"

//pode colocar export default ou so const tanto faz 
export default function ListEstados(){

    // Armazenar a lista de estados (UF)
    //useState é o que monitora a galera se ta fazendo tudo ok
    const [estados, setEstados] = useState ([]);


    //metodo para recuperar
    const getEstados = async() => {

        const response = await api.get('/estados');

        console.log(response);

        //response.data data=banco de dados dos estados inspcionar google
        setEstados(response.data)

    }

    //seria tipo o observer, vai renderizar
    useEffect(() => {getEstados()},[]);
    


    return(
            <>
                <h2>Lista de estados</h2>


                <ul>
                    {
                        //asscionando uma funcao de callback em cada um
                        // te que ser () pq é chamada de funcao 
                        estados.map(estado =>(
                            
                            //estado.nome veio do prisma que definimos no sever
                            <li key={estado.id}>{estado.nome}</li>

                        ))
                    }
                </ul>

            </>
        );

}

//export default ListEstados;