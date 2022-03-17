async function pokemon (url, page){
    const response = await fetch(url+page);
    const data = await response.json()
    display(data)
   
            if(page<=150){
                page++ 
            pokemon (`http://localhost:3000/api/pokemon/`, page)}
  
     
           
  }
  
  pokemon(`http://localhost:3000/api/pokemon/`, 1)
  
  
  function display(data){
        
    console.log(data.id)
    


  document.querySelector(".fiches").innerHTML += 
  `<div class="fiche">
  <div class="info">
  <p class="id">${data.id}</p>
  <p class="nom">${data.name}</p>
  <p class="type">${data.type}</p>
  <p class="poids">${data.poids}</p>
  <p class="taille">${data.taille}</p>
</div>
<div class="image">
  <img class="img"src="${data.image}" alt="">
</div>
</div>` 

}