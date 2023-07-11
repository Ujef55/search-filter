const search = document.querySelector('#search');


const searchFilter = () => {
    let filter = search.value.toUpperCase();
    let li = document.querySelectorAll('.listItemsName');

    for (let i = 0; i < li.length; i++){
        console.log(li[i].textContent);
    }
  
    
}

search.addEventListener('keyup', searchFilter);