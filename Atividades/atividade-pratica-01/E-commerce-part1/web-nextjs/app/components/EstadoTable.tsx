//criando tabela, e depois invoca ela no page.tsx do estado

//pegando dados do estado

import EstadoDTO from "../types/EstadoDTO";

const getAllEstado = async() =>{

    const estados = await fetch('http://localhost:5555/estados');
    return estados.json();
}


export default async function EstadoTable() {

    //isso é typescript entao estamos evitando de dar erro de tipagem isso é bom typescript
    //cada elemento do getAllEstados vai ser tratado no EstadoInterface
    const estados: EstadoDTO[] = await getAllEstado();
 

        return(
                <table className="table-auto w-full 
                 border boder-collapse
                  border-slate-400">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Criado em</th>
                                <th>Ultima atualizacao</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                estados.map((estado)=>{

                                    return(
                                            //key = para manipulacao do reacht para identificar fazer isso 
                                            <tr key={estado.id} className="border border-slate-400">    
                                                <td>{estado.id}</td>
                                                <td>{estado.nome}</td>
                                                <td>{estado.sigla}</td>
                                                <td>{estado.created_at}</td>
                                                <td>{estado.updated_at}</td>
                                            </tr>

                                        )



                                })

                            }
                                
                        </tbody>
                </table>
        )




}