//seria tipo um html 

import Image from 'next/image'
import Link from 'next/link'
//seria o link para entrar na navegacao

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" 
    style={{ backgroundImage: "url('/Img/imagem-fundo.png')",

    backgroundSize: "cover", // Ajusta a imagem para cobrir todo o espaço disponível
    backgroundRepeat: "no-repeat", // Evita que a imagem de fundo se repita
    backgroundPosition: "center" // Centraliza a imagem horizontal e verticalmente

     }}>
    


    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "2rem",
            fontWeight: "bold",
            marginLeft: "29rem",
          }}
        >
          BEM VINDO AO INFOR-FUT. 
        </h1>
        <Image src="/Img/jogador-de-futebol.png" alt="Logo" width={50} height={50} />
      </div>

  <h2 style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", marginLeft: "50%" }}>
    Somos um serviço que lhe permite <br />
    buscar ou cadastrar dados de Times e Jogadores de Futebol
</h2>

 <button><Link href="/estados" style={{ color: "#ffffff", fontSize: "1.2rem", textDecoration: "none", marginLeft: "0%", }}>Times</Link> </button>

 <button><Link href="/jogadores" style={{ color: "#ffffff", fontSize: "1.2rem", textDecoration: "none", marginLeft: "0%" }}>Jogadores</Link></button>

    </main>
  )
}
