type MensagemProps = {
    texto:string;
    importante:Boolean;
}


function Mensagem({texto, importante}:MensagemProps){
return(
    <div>
    {importante ? <strong>{texto}</strong> : <p>{texto}</p>}
    </div>
);
}

export default Mensagem;