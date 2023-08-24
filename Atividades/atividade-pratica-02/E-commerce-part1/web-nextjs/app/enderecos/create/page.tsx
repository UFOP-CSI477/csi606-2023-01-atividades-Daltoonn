'use client'

import Input from "@/app/components/forms/Input"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

import getByIdCidade from "@/app/repository/cidades/GetByIdCidades";
import CidadeDTO from "@/app/types/CidadeDTO";

export default function EnderecoCreate() {

    const [nome, setNome] = useState('');
    const [cidadeID, setCidadeID] = useState('');

    const [cidades, setCidades] =
    useState<CidadeDTO[]>([]);

    const { push } = useRouter();

    //caso ele nao permita usar o async e await fazemos essa chamada da funcao
    useEffect(() => {


        getByIdCidade(nome)
        .then(data => setCidades(data))
        .catch(error => console.error(error));


    //[]isso é o outros componentes que tem nele ,
    },[nome])

    const handleSubmit =  async (event : FormEvent) => {

        event.preventDefault();

        const data = {
            nome,

            //definindo que o estado ID tem que ser um valor numerico
            cidade_id : parseInt(cidadeID),
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
            const response = await fetch('http://localhost:5555/enderecos', requestInit);

            //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
            if(response.ok){
            const endereco = await response.json();
            const {id} = endereco;
            window.alert(`endereco inserida com sucesso! Id: ${id}`);
            push('/enderecos');
            }

        } catch (error) {
            
            window.alert('Erro na inclusao da Cidade!');
            console.error
        }







    }


    return(
        <main className="container m-auto">

            <h1>Cadastro de Endereço</h1>

            <form onSubmit= {handleSubmit}>

                <div>
                    <label htmlFor="nome">Rua</label>
                    <Input
                            name="nome"
                            setValue={(event)=>{
                                setNome(event.target.value)
                            }
                        }
                     />       
                </div>

                <div>
                <label htmlFor="cidade">Cidade</label>
                    <Input
                            name="cidade"
                            value={cidadeID}
                            setValue={(event)=>{
                                setCidadeID(event.target.value)
                            }
                        }
                     />


                    <select 
                    name="cidadeID" 
                    id="cidadeID"
                    value={cidadeID}
                    onChange={(event) =>
                        setCidadeID(event.target.value)
                    }
                    >
                        
                        <option value="" selected disabled>Selecione:</option>

                        {
                            cidades.map((cidade) => {

                            return(
                                <option
                                    key={cidade.id}
                                    value={cidade.id}>
                                        {cidade.nome}
                                    </option>
                                )

                            })

                        }


                    </select>



                </div>


                <div>

                        <button type="submit">Cadastrar</button>
                        <button type="reset">Limpar</button>
                        <button type="button">Voltar</button>
                </div>



            </form>

        </main>

    )

}

