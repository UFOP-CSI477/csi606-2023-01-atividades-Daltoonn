//repository, tipo uma funcao para smepre que precisar chamar ela 

const getByIdCidade = async(id :string) =>{


    //${id} = da cidade
    const cidade = await fetch(`http://localhost:5555/cidades/${id}`,{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return cidade.json();
}


export default getByIdCidade;