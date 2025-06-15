import CartaoDePerfil from './CartaoDePerfil';

function App(){
return(
  <div>
    <h1>Informações de pessoas</h1>
    <CartaoDePerfil nome="Roberto" idade={90} cidade="São paulo"/>
    <CartaoDePerfil nome="Mario" idade={29} cidade="Belo Horizonte"/>
  </div>
);
}

export default App;