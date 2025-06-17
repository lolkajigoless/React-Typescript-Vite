import ImagemDePerfil from './ImagemDePerfil';

function App(){
return(
  <div style={{backgroundColor:"black"}}>
    <h1 style={{color:"white", textAlign:"center"}}>Imagem com nome</h1>
    <ImagemDePerfil nome='Marcelo' fotoUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sepia_com%C3%BAn_%28Sepia_officinalis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2021-09-07%2C_DD_04.jpg/800px-Sepia_com%C3%BAn_%28Sepia_officinalis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2021-09-07%2C_DD_04.jpg'/>
    <ImagemDePerfil nome='Paulo' fotoUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Karl_Marx_001_restored.jpg/800px-Karl_Marx_001_restored.jpg'/>
    <ImagemDePerfil nome='Lorraine' fotoUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pedro_II_of_Brazil_-_Brady-Handy.jpg/800px-Pedro_II_of_Brazil_-_Brady-Handy.jpg'/>
    <ImagemDePerfil nome='Nicolas' fotoUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg'/>
    <ImagemDePerfil nome='Lorenzo' fotoUrl='https://upload.wikimedia.org/wikipedia/commons/5/50/Getulio_Vargas_%281930%29.jpg'/>
    <ImagemDePerfil nome='Felipe' fotoUrl='https://upload.wikimedia.org/wikipedia/commons/0/0b/Ant%C3%B4nio_Parreiras_-_Zumbi_2.jpg'/>

  </div>
);
}

export default App;