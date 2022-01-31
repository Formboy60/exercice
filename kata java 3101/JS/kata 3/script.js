const quotes = ["“L'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l'équation” "
,"“Le courage n'est pas l'absence de peur, mais la capacité de la vaincre” "
, "“Quand la pauvreté entre par la porte, l'amour s'en va par la fenêtre”", 
"Il est facile de nager quand on vous tient le menton" , 
"Le fou semble sage quand il se tait", 
`"Le bonheur n'est d'avoir tout ce que l'on désire, mais d'apprécier que l'on a."`,
`"La beauté est dans le regard de celui qui regarde."`]

const title = document.getElementById('pouet')


const ramdomQuotes = () =>{
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const random = Math.floor(Math.random() * quotes.length-1) + 1
    title.textContent = quotes[random]
    title.style.color = '#'+ randomColor
    
}



setInterval(() => {
    
    ramdomQuotes()
    
}, 5000);