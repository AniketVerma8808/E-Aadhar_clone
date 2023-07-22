burger = document.querySelector('.burger')
topnav = document.querySelector('.topnav')
icon = document.querySelector('.icon')


burger.addEventListener('click', ()=>{
    topnav.classList.toggle('h-nav')
    icon.classList.toggle('v-class')
})