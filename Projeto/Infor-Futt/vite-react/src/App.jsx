//app js = aplicacao 

import Menu from './components/menu/Menu'
import './App.css'


//dependendo da empresa isso pode ser diferente
function App() {
  
  // const [count, setCount] = useState(0)
  //connt = variavel, setCount = atualizacao
  //muito melhor que usar o GetElementebyID é so fazer isso 
  //useState = recuperar o estado do componente
  // {} = js
  // <> = emcapsula tudo, se tirar ela vai indicar que geral nao pode retornar, ou seja <> atribui todos ao return
  // pode ser assim <> ou React.fragment os dois sao a mesma coisa

  return (
    <>
        <h1>Sistema de compras</h1>
        <div className = "menu">
         
         <Menu/>

        </div>
        <div className = "content">


        </div>
    </>
  )
}

export default App
