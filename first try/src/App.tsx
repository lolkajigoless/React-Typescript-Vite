import Hello, { Ola } from './hello';


function App(){
return (
  <div>
  <h1>Componente principal</h1>
  <Hello nome="Lucas" idade={20} />
  <Hello nome="Maria" idade={25} />
  <Ola />
  </div>
);
}

export default App;