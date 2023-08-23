'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "@/app/components/forms/Input";

export default function DeleteEstado() {

    const [id, setId] = useState(''); // Estado a ser excluído

    const { push } = useRouter();

    async function handleSubmit(event : FormEvent) {

        event.preventDefault();

        const requestInit: RequestInit = {
            method: "DELETE",
            headers: {
                'Content-Type' :
                'application/json'
            },
        }

        try {

            const response = await fetch(`http://localhost:5555/estados/${id}`, requestInit);

            if (response.ok) {
                window.alert(`Estado excluído com sucesso! Id: ${id}`);
                push('/estados');
            }

        } catch (error) {

            window.alert('Erro na exclusão do Estado!');
            console.error(error);
        }

    }

    return (
        <main className="container m-auto">
            <h1>Exclusão de Estado</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID do Estado</label>
                    <Input
                        name="id"
                        value={id}
                        setValue={(event) => {
                            setId(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <button type="submit">Excluir</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>
                </div>
            </form>
        </main>
    );
}
