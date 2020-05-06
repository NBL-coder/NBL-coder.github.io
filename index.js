const navslide = () =>{
    const triangle = document.querySelector('.triangle');
    const nav = document.querySelector('.menu');
    const nav2 =document.querySelector('.right');
    triangle.addEventListener('click',() => {
        nav.classList.toggle('nav-active');});
    triangle.addEventListener('click',() => {
        nav2.classList.toggle('nav-active2');});
}
navslide();
