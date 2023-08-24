//criando tabela, e depois invoca ela no page.tsx do estado

//pegando dados do estado

import ProdutoDTO from "../types/ProdutoDTO";

const getAllEstado = async() =>{


    const produtos = await fetch('http://localhost:5555/produtos',{cache: 'no-store'});
    //cache no store, por padrao os dados sao cacheados
    //o problema de ter o cache é que quando a requisiçao ele faz por cache que é errado
    return produtos.json();
}


export default async function EstadoTable() {

    //isso é typescript entao estamos evitando de dar erro de tipagem isso é bom typescript
    //cada elemento do getAllprodutos vai ser tratado no EstadoInterface
    const produtos: ProdutoDTO[] = await getAllEstado();
 

        return(
                <table className="table-auto w-full 
                 border boder-collapse
                  border-slate-400">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Criado em</th>
                                <th>Ultima atualizacao</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                produtos.map((produto)=>{

                                    return(
                                            //key = para manipulacao do reacht para identificar fazer isso 
                                            <tr key={produto.id} className="border border-slate-400">    
                                                <td>{produto.id}</td>
                                                <td>{produto.Descricao}</td>
                                                <td>{produto.Valor_unitario}</td>
                                                <td>{produto.created_at}</td>
                                                <td>{produto.updated_at}</td>
                                            </tr>

                                        )



                                })

                            }
                                
                        </tbody>
                </table>
        )




}