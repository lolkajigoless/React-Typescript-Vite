type ImagemDePerfilProps = {
    nome:string;
    fotoUrl:string;
};

function ImagemDePerfil({nome,fotoUrl}:ImagemDePerfilProps){
return(
    // rel="noopener noreferrer" -> boa prática de segurança
    <div style={{textAlign:"center"}}>         
        <a href={fotoUrl} target="_blank" rel="noopener noreferrer"> 
        <img src={fotoUrl} style={{borderRadius:"50%", width:"120px", objectFit:"cover", border:"2px solid #c87d32"}}/><br />
        </a>
        <p style={{color:"white"}}>Por: {nome}</p>
    </div>
);
}

export default ImagemDePerfil;

