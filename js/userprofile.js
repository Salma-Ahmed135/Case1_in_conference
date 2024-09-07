
let navButton = document.getElementById('bars')
let navList = document.querySelector('.navbar .list')

bars.addEventListener('click',function(){
    navList.classList.toggle('slide')
})
let delBtn=document.getElementById("del-btn");
let popup=document.getElementById("popup");

delBtn.addEventListener("click",function(e){
    e.preventDefault()
    popup.classList.remove("d-none")
})
let YES=document.getElementById("yes");
let NO=document.getElementById("no");

YES.addEventListener("click", function(){
    popup.classList.add("d-none")
})
NO.addEventListener("click", function(){
    popup.classList.add("d-none")
})