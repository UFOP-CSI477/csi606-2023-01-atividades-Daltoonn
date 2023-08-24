//criando tabela, e depois invoca ela no page.tsx do estado

//pegando dados do estado

import CompraDTO from "../types/CompraDTO";

const getAllCompras = async() =>{


    const compras = await fetch('http://localhost:5555/compras',{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return compras.json();
}


export default async function CompraTable() {

    //isso é typescript entao estamos evitando de dar erro de tipagem isso é bom typescript
    //cada elemento do getAllcompras vai ser tratado no EstadoInterface
    const compras: CompraDTO[] = await getAllCompras();
 

        return(
                <table className="table-auto w-full 
                 border boder-collapse
                  border-slate-400">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Data</th>
                                <th>Criado em</th>
                                <th>Ultima atualizacao</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                compras.map((compra)=>{

                                    return(
                                            //key = para manipulacao do reacht para identificar fazer isso 
                                            <tr key={compra.id} className="border border-slate-400">    
                                                <td>{compra.id}</td>
                                                <td>{compra.data}</td>
                                                <td>{compra.created_at}</td>
                                                <td>{compra.updated_at}</td>
                                            </tr>

                                        )



                                })

                            }
                                
                        </tbody>
                </table>
        )




}