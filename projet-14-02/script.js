
const searchBar = document.getElementById('searchBar')
let tab = []


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();    
    const filteredTitle = tab.filter((hub) => {
        
        return (
            hub.attributes.title.toLowerCase().includes(searchString) ||
            hub.attributes.category.toLowerCase().includes(searchString)
            );
        });
        myApi(filteredTitle);
    })



fetch("https://strapi-gogokodo.herokuapp.com/api/sources")
.then(response => response.json())
.then(response => {myApi(response.data); tab=response.data})
.catch(error => console.log("Erreur : " + error));



function myApi(data) {
    const article = document.getElementById("art")
    article.innerHTML=''

for(video of data){
      
    
article.innerHTML += `<section class="caps"> 
<h3>${video.attributes.title}</h3>
<button>visiter</button>
</section>`

}
}



