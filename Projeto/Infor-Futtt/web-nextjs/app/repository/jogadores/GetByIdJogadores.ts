//repository, tipo uma funcao para smepre que precisar chamar ela 

const getByIdJogador = async(id :string) =>{


    //${id} = da jogador
    const jogador = await fetch(`http://localhost:5555/jogadores/${id}`,{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return jogador.json();
}


export default getByIdJogador;