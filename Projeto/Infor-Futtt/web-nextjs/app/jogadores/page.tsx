import Link from "next/link"
import JogadoresTable from "../components/JogadoresTable"

export default function Cidade () {

    return(<>
        <main className="container m-auto">

            <Link href="/"><button>Home</button></Link>
            <Link href="/jogadores/create"><button>Cadastrar Jogador</button></Link>
            <h1><br></br>Lista de Jogadores</h1>
            
            {/* Lista de jogadores */}
            <JogadoresTable />

            

        </main>
        </>

    )

}