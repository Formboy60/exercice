




fetch("https://strapi-gogokodo.herokuapp.com/api/sources")
.then(response => response.json())
.then(response => myApi(response.data))
.catch(error => console.log("Erreur : " + error));



function myApi(data) {
    const article = document.getElementById("art")
console.log(data)

for(video of data){
    console.log(video.attributes.title)
    
    
article.innerHTML += `<section class="caps"> 
<h3>${video.attributes.title}</h3>
<button>visiter</button>
</section>`

}
}




