const searchBar = document.querySelector('.searchbar')
let dataAPI = []


fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(data => { 
        dataAPI = data        
        myApi(dataAPI)
    })

    
    function myApi(data) {
        const article = document.querySelector(".fiches")
        article.innerHTML=''
        
    for(video of data){
        

    article.innerHTML += `<div><h2 class="nom">${video.name}</h2>
    <p class="ecole">${video.house}</p>
    <img class="photo" src="${video.image}" alt=""></div>`
    }
}

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();    
    const filteredTitle = dataAPI.filter((hub) => {
        console.log(dataAPI)
        return (
            hub.house.toLowerCase().includes(searchString) ||
            hub.name.toLowerCase().includes(searchString)
       
            );
        });
        myApi(filteredTitle);
    })

// const fav = document.querySelector('.fiches')

