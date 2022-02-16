          
          
//   function easyFilter (selector, atribut1, atribut2,atribut3, callback) {    

//     const searchBar = document.querySelector(selector)  
//     let tab = []
//     attribute = atribut1
//     titre = atribut2
//     categorie = atribut3
//     chemin1 = hub.attribute.titre
//     chemin2 = hub.attribute.categorie
   
//         searchBar.addEventListener('keyup', (e) => {
//             const searchString = e.target.value.toLowerCase();    
//             const filteredTitle = tab.filter((hub) => {
        
//                 return (
//                     chemin1.toLowerCase().includes(searchString) ||
//                     chemin2.toLowerCase().includes(searchString)
//                          );
//                     });
//                 callback(filteredTitle);
//             })
//  }


function easyFilter(selector, array, callback){

    const searchBar = document.querySelector(selector)

    searchBar.addEventListener('keyup', (e) => {
                    const searchString = e.target.value.toLowerCase();    
                    const filteredTitle = array.filter((hub) => {

                        return (
                               hub.toLowerCase().includes(searchString) 
                            );
                        });
                     callback(filteredTitle);
                })
}
