let bars = document.getElementById('bars')
let navLinks = document.querySelector('.nav-links')

bars.addEventListener('click', function(){
    navLinks.classList.toggle('slide')
}
)

let navButton = document.getElementById('bars')
let navList = document.querySelector('.navbar .list')

bars.addEventListener('click',function(){
    navList.classList.toggle('slide')
})