//App.jsx
import './App.css'


function App(){
  const readmore =[
    {noticia:"Funcinária que dencuniou procurador diz que agressor 'despresava mulheres' e teme  sair na rua:'Muito medo'"},
    {noticia:"Imposto de Renda 2022: Receita abre consultas ao 2º lote de restituição nesta  quinta; veja se você está no grupo"},
    {noticia:"Governo opera pra evitar CPI do MEC, que ganhou força após prisão prisão de Milton Ribeiro"},
    {noticia:"Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal;ficam feridos"},
    {noticia:"Almir Sater é 'parado em blitz' e policiais tietam cantor: ' senhor é dono dessa chalana?'"}
  ]
  const lista = readmore.map(
    (r)=>
    <p>
       {r.noticia}
    </p> 
  )
return(
    
    <div>
 
            {lista}  

    </div>
)
}
export default App;