import Tarefa from './Tarefa';

function App(){
return(
  <div>
    <h1>ListaDeTarefas</h1>
    <Tarefa descricao='Fazer lições de casa' concluido={true}/>
    <Tarefa descricao='estudar' concluido={true}/>
    <Tarefa descricao='levantar da cadeira' concluido={false}/>
    <Tarefa descricao='dormir cedo' concluido={false}/>
    <Tarefa descricao='comer' concluido={false}/>
    <Tarefa descricao='beber' concluido={true}/>
  </div>
);
}

export default App;