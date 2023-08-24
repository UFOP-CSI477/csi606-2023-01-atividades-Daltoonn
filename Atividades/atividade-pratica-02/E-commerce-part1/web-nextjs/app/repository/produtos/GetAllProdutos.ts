//repository, tipo uma funcao para smepre que precisar chamar ela 

const getAllProdutos = async() =>{


    const produtos = await fetch('http://localhost:5555/produtos',{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return produtos.json();
}


export default getAllProdutos;