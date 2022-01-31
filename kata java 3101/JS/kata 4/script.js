
    const wesh = document.querySelector('a')

wesh.addEventListener('click', function(event){
    if(wesh.textContent =='🙈'){
        console.log('salut if')
        wesh.textContent = '🙉'}
        
    else{
        console.log('salut else')
        wesh.textContent ='🙈'}


});
