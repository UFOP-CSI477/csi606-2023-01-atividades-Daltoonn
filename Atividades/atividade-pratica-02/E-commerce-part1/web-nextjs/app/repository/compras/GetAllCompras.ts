//repository, tipo uma funcao para smepre que precisar chamar ela 

const getAllCompra = async() =>{
   
    const compras = await fetch('http://localhost:5555/compras',{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return compras.json();
}


export default getAllCompra;