import BotaoPersonalizado from './BotaoPersonalizado';

function App(){
return(
  <div>
    <h1>Botões personalizados</h1>
    <BotaoPersonalizado texto='Botão azul' cor='blue'/>
    <br />
    <BotaoPersonalizado texto='Botão vermelho' cor='red'/>
    <br />
    <BotaoPersonalizado texto='Botão amarelo' cor='yellow'/>
  </div>
);
}

export default App;