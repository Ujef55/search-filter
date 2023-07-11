const search = document.querySelector('#search');
const box = document.querySelector('.box');


const searchFilter = () => {
    let filter = search.value.toUpperCase();
    let li = document.querySelectorAll('.listItemsName');
    let head = document.querySelectorAll('.head'); 

    for (let i = 0; i < li.length; i++){
        let item = li[i];
        
        let itemName = item.textContent.toUpperCase();

            if (itemName.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
    }
  
    
}

search.addEventListener('keyup', searchFilter);