import Mensagem from './Mensagem';

function App(){
return(
  <div>
    <h1>A fazeres</h1>
    <hr />
    <Mensagem texto='Comer' importante={true}/>
    <Mensagem texto='Dormir' importante={false}/>
  </div>
);
}

export default App;