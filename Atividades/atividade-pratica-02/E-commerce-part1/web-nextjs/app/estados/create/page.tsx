//para renderizar pelo lado do cliente
//eventos que sao trabalhados com o navegador
//isso é do next.js onde ele assume que tudo é sever componense 
'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/app/components/forms/Input";

export default function CreateEstado() {

    //observaçao é sempre recomendado fazer dessa maneira para evitar que o arry leia errrado
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');

    //so funciona com client
    const {push} = useRouter();

    async function handleSubmit(event : FormEvent) {

            //é para nao enviar um request 
            event.preventDefault();

            //contruimos um objeto que vai movimentar
            const data = {

                nome ,
                sigla

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
                const response = await fetch('http://localhost:5555/estados', requestInit);

                //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
                if(response.ok){
                const estado = await response.json();
                const {id} = estado;
                window.alert(`Estado inserido com sucesso! Id: ${id}`);
                push('/estados');
                }

            } catch (error) {
                
                window.alert('Erro na inclusao do Estado!');
                console.error
            }


    }

    
    //essa funcao para o codigo ficar mais limpo mais faz as mesmas coisas 
    //setNome tem q invocar de alguma maneira, e quando o usuario digita no imput e coloca no html
    const handleChangeNome = (event : ChangeEvent<HTMLInputElement>) =>{
        setNome(event.target.value);
    }


    return(

            <main className="container m-auto">
                <h1>Cadastro de estado: {nome}</h1>

                <form onSubmit={handleSubmit}>


                        <div>
                        <label 
                            htmlFor="nome">Nome</label>
                        { /*<input 
                            type="text"
                            name="nome"
                            id="nome" 
                         onChange={(event) =>{setNome(event.target.value)}}/> */}
                         <Input
                                name="nome"
                                setValue={handleChangeNome}
                        />

                        </div>
                        <div>
                        <label 
                            htmlFor="sigla">Sigla</label>
                        <Input 
                           
                           name="sigla"
                           placeholder="Informe a sigla da unidade Federativa"
                           setValue={(event) =>
                            {
                                //neste caso nao usei a funcao igual usei no nome peguei do input.tsx
                                setSigla(event.target.value)

                            }}/>    
                        </div>
                        <div>
                            <button type="submit">Cadastrar</button>
                            <button type="reset">Limpar</button>
                            <button type="button">Voltar</button>
                        </div>
                </form>

            </main>

    );

}