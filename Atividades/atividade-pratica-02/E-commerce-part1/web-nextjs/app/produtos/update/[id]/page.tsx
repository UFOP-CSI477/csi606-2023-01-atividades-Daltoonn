//o nome da page tem quer ser [id], mesmo pq é ele que faz a referencia 

//detalhe copiamos e colocamos um codigo, é interresante saber que quando fazemos muito isso
//e legal fazer ele virar um componente para o codigo ficar legalll 


'use client'

import Input from "@/app/components/forms/Input"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

import getAllEstados from "@/app/repository/estados/GetAllEstados";
import EstadoDTO from "@/app/types/EstadoDTO";

import getByIdCidade from "@/app/repository/cidades/GetByIdCidades";

//aqui estamos fazendo a funcao update e estemos passando os parametros
export default function UpdateCidade({params} : {params : { id : string}}) {
  const [nome, setNome] = useState('');
  const [estadoId, setEstadoId] = useState('');

  const [estados, setEstados] =
  useState<EstadoDTO[]>([]);

  const { push } = useRouter();

  //caso ele nao permita usar o async e await fazemos essa chamada da funcao
  // que faz o carregamento dos estados
  useEffect(() => {

      getAllEstados()
          .then(data => setEstados(data))
          .catch(error => console.error(error));

      getByIdCidade(params.id)
          .then(data =>{
                setNome(data.nome);
                setEstadoId(data.estado_id);
          })    

  //[]isso é o outros componentes que tem nele ,
  },[params])

  const handleSubmit =  async (event : FormEvent) => {

      event.preventDefault();

      const data = {
          id: parseInt(params.id),
          nome,

          //definindo que o estado ID tem que ser um valor numerico
          estado_id : parseInt(estadoId),
      }
      
      //isso é para especificar a rota tipo POST, ela é rota e tambem manda
      const requestInit: RequestInit = {
          method: "PUT",
          headers: {
              'Content-Type' :
              'application/json'
          },
          //essa funcao transforma o obejeto java script em jsib
          body:JSON.stringify(data)
      }


      try {
          
          //ai manda para o servidor 
          const response = await fetch('http://localhost:5555/cidades', requestInit);

          //se tudo s=deu certo transforma em java script e manda mensagem falando q deu bom
          if(response.ok){
          const cidade = await response.json();
          const {id} = cidade;
          window.alert(`Cidade atualizada com sucesso! Id: ${id}`);
          push('/cidades');
          }

      } catch (error) {
          
          window.alert('Erro na atualização da Cidade!');
          console.error
      }







  }


  return(
      <main className="container m-auto">

          <h1>Atualização da Cidade</h1>

          <form onSubmit= {handleSubmit}>

              <div>
                  <label htmlFor="nome">Nome</label>
                  <Input
                          name="nome"
                          value={nome}
                          setValue={(event)=>{
                              setNome(event.target.value)
                          }
                      }
                   />       
              </div>

              <div>
              <label htmlFor="estado">Estado</label>
                  <Input
                          name="estado"
                          value={estadoId}
                          setValue={(event)=>{
                              setEstadoId(event.target.value)
                          }
                      }
                   />


                  <select 
                  name="estadoId" 
                  id="estadoId"
                  value={estadoId}
                  onChange={(event) =>
                      setEstadoId(event.target.value)
                  }
                  >
                      
                      <option value="" selected disabled>Selecione:</option>

                      {
                          estados.map((estado) => {

                          return(
                              <option
                                  key={estado.id}
                                  value={estado.id}>
                                      {estado.nome}-{estado.sigla}
                                  </option>
                              )

                          })

                      }


                  </select>



              </div>


              <div>

                      <button type="submit">Atualizar</button>
                      <button type="submit">Limpar</button>
                      <button type="submit">Voltar</button>
              </div>



          </form>

      </main>

  )

}




