import Link from "next/link"
import EstadoTable from "../components/EstadoTable";


export default function Estado(){

    return(

        <main className="container m-auto">
        
        <Link href="/"><button>Home</button></Link>
        <Link href="/estados/create"><button>Cadastrar Time</button></Link>

       
        <h1> <br></br>Lista de Timees</h1>

        <EstadoTable />


        </main>

    );



}