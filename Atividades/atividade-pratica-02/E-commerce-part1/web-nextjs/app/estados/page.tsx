import Link from "next/link"
import EstadoTable from "../components/EstadoTable";


export default function Estado(){

    return(

        <main className="container m-auto">
        
        <Link href="/">Home</Link>
        <Link href="/estados/create">Cadastrar</Link>

        <h1>Lista de Estados</h1>

        <EstadoTable />


        </main>

    );



}