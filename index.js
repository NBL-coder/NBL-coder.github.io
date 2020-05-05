const navslide = () =>{
    const triangle = document.querySelector('.triangle');
    const nav = document.querySelector('.menu');
    const nav2 =document.querySelector('.right');
    triangle.addEventListener('click',() => {
        nav.classList.toggle('nav-active');});
    triangle.addEventListener('click',() => {
        nav2.classList.toggle('nav-active2');});


    
}
const loadin =() =>
{
    const links = document.querySelectorAll('.menu_2 li');
        links.forEach((link,index) => 
        {
            link.style.animation ='listfade 0.5s ease forwards ${index / 10 + 2}s';
            console.log(index /10)
        });    

}
navslide();
loadin();