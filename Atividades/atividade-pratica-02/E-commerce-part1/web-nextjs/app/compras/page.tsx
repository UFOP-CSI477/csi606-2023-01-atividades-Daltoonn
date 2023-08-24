import Link from "next/link"
import CompraTable from "../components/CompraTable"

export default function Endereco () {

    return(
        <main className="container m-auto">

            <h1>Lista de Compras</h1>


            <Link href="/">Home</Link>
            <Link href="/compras/create">Cadastrar</Link>
            
            {/* Lista de Compras */}
            <CompraTable />

        </main>


    )

}