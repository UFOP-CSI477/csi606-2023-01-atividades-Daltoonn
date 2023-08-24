'use client'

import Link from "next/link";
import EnderecoDTO from "../types/EnderecoDTO";
import {useEffect, useState } from "react";

const getAllenderecos = async () =>{

    const enderecos = await fetch('http://localhost:5555/enderecos', {cache: 'no-store'});
    return enderecos.json();
}




export default  function EnderecoTable() {

    //funcao que faz a formatacao das datas
    //date: é o parametro que nos pegamos da tabela pois la esta format(alguma coisa) = alguma coisa = date
    const format = (date: string| undefined) => {

        if(date === undefined ){
            return;
        }

        const dateObj = new Date(date);

        return dateObj.toLocaleString('pt-br')

    }




    const [enderecos, setenderecos] =
    useState<EnderecoDTO[]>([]);

 //   const enderecos: EnderecoDTO[] = await getAllenderecos();

    useEffect(() => {

        getAllenderecos()
                .then((data) =>{
                    console.log(data);
                    setenderecos(data);
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
            const response = await fetch('http://localhost:5555/enderecos', requestInit);
  
            //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
            if(response.ok){
            const endereco = await response.json();
            const {id} = endereco;
            window.alert(`endereco excluida com sucesso! Id: ${id}`);

            //atualizar a lista
            setenderecos(enderecos.filter(
                elem => elem.id != endereco.id
            ))


            }
  
        } catch (error) {
            
            window.alert('Erro na exclusao da endereco!');
            console.error
        }
  
  
    }


    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Rua</th>
                    <th>Numero</th>
                    <th>Complemento</th>
                    <th>Bairro</th>
                    <th>Telefone</th>
                    <th>Cidade</th>
                    <th>Criado em</th>
                    <th>Ultima atualização</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                    <th>Excluir-handler</th>
                </tr>
            </thead>

        <tbody>


            {       

                        enderecos.map((endereco) => {
                            
                            return(
                                <tr key={endereco.id}>
                                    <td>{endereco.id}</td>
                                    <td>{endereco.rua}</td>
                                    <td>{endereco.numero}</td>
                                    <td>{endereco.Complemento}</td>
                                    <td>{endereco.Bairro}</td>
                                    <td>{endereco.telefone}</td>
                                    <td>{endereco.cidade?.nome}</td>
                                    <td>{format(endereco.created_at)}</td>
                                    <td>{format(endereco.updated_at)}</td>
                                    <td><Link href={`/enderecos/update/${endereco.id}`}>
                                        Atualizar</Link></td>
                                    <td><Link href={`/enderecos/delete/${endereco.id}`}>
                                        Excluir</Link></td> 

                                    <td>
                                            <button
                                                onClick={() => {
                                                    if(window.confirm("Confirma exclusao?")){

                                                    handleDelete(endereco.id)
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