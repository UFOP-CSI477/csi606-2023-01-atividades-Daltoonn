import Link from "next/link"
import ProdutoTable from "../components/ProdutoTable"

export default function Cidade () {

    return(
        <main className="container m-auto">

            <h1>Lista de Produtos</h1>


            <Link href="/">Home</Link>
            <Link href="/cidades/create">Cadastrar</Link>
            
            {/* Lista de Produtos */}
            <ProdutoTable />

        </main>


    )

}