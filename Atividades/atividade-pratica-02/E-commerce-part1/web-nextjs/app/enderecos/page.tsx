import Link from "next/link"
import EnderecoTable from "../components/EnderecoTable"

export default function Endereco () {

    return(
        <main className="container m-auto">

            <h1>Lista de Enderecos</h1>


            <Link href="/">Home</Link>
            <Link href="/enderecos/create">Cadastrar</Link>
            
            {/* Lista de Enderecos */}
            <EnderecoTable />

        </main>


    )

}