//criando tabela, e depois invoca ela no page.tsx do estado

//pegando dados do estado
'use client'

import Link from "next/link";
import EstadoDTO from "../types/EstadoDTO";
import { useEffect, useState } from "react";

const getAllEstado = async() =>{


    const estados = await fetch('http://localhost:5555/estados',{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return estados.json();
}


export default function EstadoTable() {

    //isso é typescript entao estamos evitando de dar erro de tipagem isso é bom typescript
    //cada elemento do getAllEstados vai ser tratado no EstadoInterface
    //const estados: EstadoDTO[] = await getAllEstado();
 
    const [estados, setEstado] = useState<EstadoDTO[]>([]);

    useEffect(() => {

        getAllEstado()
                .then((data) =>{
                    console.log(data);
                    setEstado(data);
                })
    }, [] );

    const handleDelete =  async (id: number | undefined) => {
  
        const data = {
            id,
        };
        
        //isso é para especificar a rota tipo POST, ela é rota e tambem manda
        const requestInit: RequestInit = {
            method: "DELETE",
            headers: {
                "Content-Type":
                "application/json"
            },
            //essa funcao transforma o obejeto java script em jsib
            body:JSON.stringify(data)
        }
  
  
        try {
            
            //ai manda para o servidor 
            const response = await fetch('http://localhost:5555/estados', requestInit);
  
            //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
            if(response.ok){
            const jogador = await response.json();
            const {id} = jogador;
            window.alert(`Time excluido com sucesso! Id: ${id}`);

            //atualizar a lista
            setEstado(estados.filter(
                elem => elem.id != jogador.id
            ))


            }
  
        } catch (error) {
            
            window.alert('Erro na exclusao da jogador!');
            console.error
        }
  
  
    }





        return(
                <table className="table-auto w-full 
                 border boder-collapse
                  border-slate-400">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Incluido em</th>
                                <th>Ultima Alteração</th>
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
                                                <td><Link href={`/estados/update/${estado.id}`}>
                                        <button>Alterar</button></Link></td>
                                    <td>
                                            <button
                                                onClick={() => {
                                                    if(window.confirm("Confirma exclusao?")){

                                                    handleDelete(estado.id)
                                                    }
                                                }}
                                                >
                                                    Excluir
                                            </button>   
                                    </td>  
                                            </tr>

                                        )



                                })

                            }
                                
                        </tbody>
                </table>
        )




}