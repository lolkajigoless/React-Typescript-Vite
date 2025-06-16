type TarefaProps = {
    descricao:string;
    concluido:boolean;
};

function Tarefa({descricao, concluido}:TarefaProps){
    return(
        <div>
            {concluido ? <h2>✔️ {descricao} </h2>:<h2>❌ {descricao}</h2>}
        </div>
    );
}

export default Tarefa;