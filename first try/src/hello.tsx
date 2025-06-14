
type HelloProps = {
  nome: string;
  idade: number;
};

function Hello({ nome, idade }: HelloProps) {
  return (
    <p>
      Olá, {nome}! Você tem {idade} anos.
    </p>
  );
}

function Ola(){
    return <h3>Bom dia!!!!</h3>;
}

export default Hello;
export { Ola };

