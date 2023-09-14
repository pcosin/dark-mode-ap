const $btn = document.getElementById("toggle-mode");

const getDarkMode = localStorage.getItem('mode');

$btn.addEventListener('click', () => {
   if(!document.body.classList.contains('black')) {
       document.body.classList.add('black')
       localStorage.setItem('mode', 'black') 
   } else {
       document.body.classList.remove('black');
       localStorage.removeItem('mode')
   }
})

if(getDarkMode === 'black') {
    document.body.classList.add('black');
} else {
    document.body.classList.remove('black')
}