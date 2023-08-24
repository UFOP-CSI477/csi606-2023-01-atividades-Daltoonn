'use client'

import Link from "next/link";
import CidadeDTO from "../types/CidadeDTO";
import {useEffect, useState } from "react";

const getAllCidades = async () =>{

    const cidades = await fetch('http://localhost:5555/cidades', {cache: 'no-store'});
    return cidades.json();
}




export default  function CidadeTable() {

    //funcao que faz a formatacao das datas
    //date: é o parametro que nos pegamos da tabela pois la esta format(alguma coisa) = alguma coisa = date
    const format = (date: string| undefined) => {

        if(date === undefined ){
            return;
        }

        const dateObj = new Date(date);

        return dateObj.toLocaleString('pt-br')

    }




    const [cidades, setCidades] =
    useState<CidadeDTO[]>([]);

 //   const cidades: CidadeDTO[] = await getAllCidades();

    useEffect(() => {

        getAllCidades()
                .then((data) =>{
                    console.log(data);
                    setCidades(data);
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
            const response = await fetch('http://localhost:5555/cidades', requestInit);
  
            //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
            if(response.ok){
            const cidade = await response.json();
            const {id} = cidade;
            window.alert(`Cidade excluida com sucesso! Id: ${id}`);

            //atualizar a lista
            setCidades(cidades.filter(
                elem => elem.id != cidade.id
            ))


            }
  
        } catch (error) {
            
            window.alert('Erro na exclusao da Cidade!');
            console.error
        }
  
  
    }


    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Criado em</th>
                    <th>Ultima atualização</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                    <th>Excluir-handler</th>
                </tr>
            </thead>

        <tbody>


            {       

                        cidades.map((cidade) => {
                            
                            return(
                                <tr key={cidade.id}>
                                    <td>{cidade.id}</td>
                                    <td>{cidade.nome}</td>
                                    <td>{cidade.estado?.nome}-{cidade.estado?.sigla}</td>
                                    <td>{format(cidade.created_at)}</td>
                                    <td>{format(cidade.updated_at)}</td>
                                    <td><Link href={`/cidades/update/${cidade.id}`}>
                                        Atualizar</Link></td>
                                    <td><Link href={`/cidades/delete/${cidade.id}`}>
                                        Excluir</Link></td> 

                                    <td>
                                            <button
                                                onClick={() => {
                                                    if(window.confirm("Confirma exclusao?")){

                                                    handleDelete(cidade.id)
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