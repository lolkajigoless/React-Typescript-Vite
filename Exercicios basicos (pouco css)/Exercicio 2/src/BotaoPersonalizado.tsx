type BotaoPersonalizadoProps = {
    texto: string;
    cor: string;
};


function BotaoPersonalizado({texto, cor}: BotaoPersonalizadoProps){
    return(
        <div>
        <button style={{ backgroundColor: cor }}>{texto}</button>
        </div>
    );
}

export default BotaoPersonalizado;