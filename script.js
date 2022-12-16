const toggleBtn = document.querySelector('.toggle-btn');
const listContainer = document.querySelector('.list-container');

toggleBtn.addEventListener('click',()=>{
    //when clicked show the hidden items
    listContainer.classList.toggle('flex');
    
})