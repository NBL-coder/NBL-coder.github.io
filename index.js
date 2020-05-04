const navslide = () =>{
    const triangle = document.querySelector('.triangle');
    const nav = document.querySelector('.left');
    triangle.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}
navslide();