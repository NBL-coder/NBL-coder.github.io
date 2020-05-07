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
const scrol = document.querySelector('.nav-bar');
// console.log(window.innerHeight);

window.addEventListener('scroll',() => {
    console.log(scrol.getBoundingClientRect().top);
    if(scrol.getBoundingClientRect().top == 0)
    {
        scrol.classList.add('nav-scroll');
    }
    else
    {
        scrol.classList.remove('nav-scroll');
    }
});
const easter = document.querySelector('.nav-link_2')
console.log(easter);
window.addEventListener('scroll',()=>{
    if(scrol.getBoundingClientRect().top == 0)
    {
        easter.classList.add('easter-scroll');
    }
    else{
        easter.classList.remove('easter-scroll');
    }
});


