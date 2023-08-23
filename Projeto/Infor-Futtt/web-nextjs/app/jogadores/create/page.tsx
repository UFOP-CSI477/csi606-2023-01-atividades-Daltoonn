'use client'

import Input from "@/app/components/forms/Input"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

import getAllEstados from "@/app/repository/estados/GetAllEstados";
import EstadoDTO from "@/app/types/EstadoDTO";

export default function JogadorCreate() {

    const [nome, setNome] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [posicao, setPosicao] = useState('');
    const [estadoId, setEstadoId] = useState('');

    const [estados, setEstados] =
    useState<EstadoDTO[]>([]);

    const { push } = useRouter();

    //caso ele nao permita usar o async e await fazemos essa chamada da funcao
    useEffect(() => {


        getAllEstados()
            .then(data => setEstados(data))
            .catch(error => console.error(error));

    //[]isso é o outros componentes que tem nele ,
    },[])

    const handleSubmit =  async (event : FormEvent) => {

        event.preventDefault();

        const data = {
            nome,
            altura,
            idade,
            posicao,

            //definindo que o estado ID tem que ser um valor numerico
            estado_id : parseInt(estadoId),
        }
        
        //isso é para especificar a rota tipo POST, ela é rota e tambem manda
        const requestInit: RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' :
                'application/json'
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
            window.alert(`jogador inserido com sucesso! Id: ${id}`);
            push('/jogadores');
            }

        } catch (error) {
            
            window.alert('Erro na inclusao do Jogador!');
            console.error
        }







    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de Jogadores</h1>

            <form onSubmit= {handleSubmit}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <Input
                            name="nome"
                            setValue={(event)=>{
                                setNome(event.target.value)
                            }
                        }
                     />       
                </div>

                <div>
                    <label htmlFor="nome">Altura</label>
                    <Input
                            name="nome"
                            setValue={(event)=>{
                                setAltura(event.target.value)
                            }
                        }
                     />       
                </div>

                <div>
                    <label htmlFor="nome">Idade</label>
                    <Input
                            name="nome"
                            setValue={(event)=>{
                                setIdade(event.target.value)
                            }
                        }
                     />       
                </div>

                <div>
                    <label htmlFor="nome">Posicao</label>
                    <Input
                            name="nome"
                            setValue={(event)=>{
                                setPosicao(event.target.value)
                            }
                        }
                     />       
                </div>

                <div>
                <label htmlFor="estado">Time</label>
                    <Input
                            name="estado"
                            value={estadoId}
                            setValue={(event)=>{
                                setEstadoId(event.target.value)
                            }
                        }
                     />


                    <select 
                    name="estadoId" 
                    id="estadoId"
                    value={estadoId}
                    onChange={(event) =>
                        setEstadoId(event.target.value)
                    }
                    >
                        
                        <option value="" selected disabled>Selecione:</option>

                        {
                            estados.map((estado) => {

                            return(
                                <option
                                    key={estado.id}
                                    value={estado.id}>
                                        {estado.nome}-{estado.sigla}
                                    </option>
                                )

                            })

                        }


                    </select>



                </div>


                <div>

                        <button type="submit">Cadastrar</button>
                        <button type="submit">Limpar</button>
                        <button type="submit">Voltar</button>
                </div>



            </form>

        </main>

    )

}

