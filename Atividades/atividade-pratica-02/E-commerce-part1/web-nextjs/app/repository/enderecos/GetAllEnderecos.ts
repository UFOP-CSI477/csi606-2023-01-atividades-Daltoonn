//repository, tipo uma funcao para smepre que precisar chamar ela 

const getAllEnderecos = async() =>{


    const enderecos = await fetch('http://localhost:5555/enderecos',{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return enderecos.json();
}


export default getAllEnderecos;