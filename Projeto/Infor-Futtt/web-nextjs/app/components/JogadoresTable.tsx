'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import jogadorDTO from "../types/JogadorDTO";
import {useEffect, useState } from "react";

const getAllJogadores = async () =>{

    const jogadores = await fetch('http://localhost:5555/jogadores', {cache: 'no-store'});
    return jogadores.json();
}




export default  function JogadorTable() {

    //funcao que faz a formatacao das datas
    //date: é o parametro que nos pegamos da tabela pois la esta format(alguma coisa) = alguma coisa = date
    const format = (date: string| undefined) => {

        if(date === undefined ){
            return;
        }

        const dateObj = new Date(date);

        return dateObj.toLocaleString('pt-br')

    }




    const [jogadores, setJogadores] =
    useState<jogadorDTO[]>([]);

 //   const jogadores: jogadorDTO[] = await getAlljogadores();

    useEffect(() => {

        getAllJogadores()
                .then((data) =>{
                    console.log(data);
                    setJogadores(data);
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
            const response = await fetch('http://localhost:5555/jogadores', requestInit);
  
            //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
            if(response.ok){
            const jogador = await response.json();
            const {id} = jogador;
            window.alert(`jogador excluida com sucesso! Id: ${id}`);

            //atualizar a lista
            setJogadores(jogadores.filter(
                elem => elem.id != jogador.id
            ))


            }
  
        } catch (error) {
            
            window.alert('Erro na exclusao da jogador!');
            console.error
        }
  
  
    }


    return(
        <>
    
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Altura</th>
                    <th>Idade</th>
                    <th>Posicao</th>
                    <th>Time Atual </th>
                    <th>Ultima Atualização</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

        <tbody>


            {       

                        jogadores.map((jogador) => {
                            
                            return(
                                <tr key={jogador.id}>
                                    <td>{jogador.id}</td>
                                    <td>{jogador.nome}</td>
                                    <td>{jogador.altura}</td>
                                    <td>{jogador.idade}</td>
                                    <td>{jogador.posicao}</td>
                                    <td>{jogador.Time?.nome}-{jogador.Time?.sigla}</td>
                                    <td>{format(jogador.updated_at)}</td>
                                    <td><Link href={`/jogadores/update/${jogador.id}`}>
                                        <button>Atualizar</button></Link></td>
                                    <td>
                                            <button
                                                onClick={() => {
                                                    if(window.confirm("Confirma exclusao?")){

                                                    handleDelete(jogador.id)
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

       

        </>)

}