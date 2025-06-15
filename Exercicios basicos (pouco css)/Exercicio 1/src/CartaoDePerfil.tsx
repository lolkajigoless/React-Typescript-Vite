type CartaoDePerfilProps = {
    nome: string;
    idade: number;
    cidade: string;
};


    function CartaoDePerfil({nome, idade, cidade}:CartaoDePerfilProps){
        return(
            <p>
                Nome: {nome}, Idade:{idade}, Cidade:{cidade} da pessoa.
            </p>
        );
    }

    export default CartaoDePerfil;