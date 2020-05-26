const chapter =  document.querySelectorAll('.chapter');
const list = document.querySelectorAll('.menu_2 a');
const span = document.querySelectorAll('.menu_2 span');
const tracker = document.querySelector('.menu_2 li:nth-child(1)');
const item1 =document.querySelector('.item:nth-child(1)');
const item2 =document.querySelector('.item:nth-child(2)');
const all = document.querySelector('.all');
const html_l = document.querySelector('.html-l');
const css_l = document.querySelector('.css-l');
const li_op = document.querySelector('.menu_3');
const allLis = document.querySelectorAll('li > a');
const miniDemo = document.querySelector('.mini-demo');
const nav_link =document.querySelector('a.html-l');
const nav_link2 =document.querySelector('a.css-l');

miniDemo.getElementsByClassNa
for(let item of allLis) {
  item.addEventListener('mouseover', function(e) {
    miniDemo.src = e.target.href;
  })
}
nav_link.addEventListener('click',function(e) {
  let li = document.querySelectorAll('.menu_2 a');
  for (let i = 0; i < 15 ;i ++)
  {
    li[i].classList.toggle("nav_bg");
  }
  for (let i = 0; i< 5; i++)
  {
    chapter[i].classList.toggle("chapter_bg");
  }
});
nav_link2.addEventListener('click',function(e) {
  let li = document.querySelectorAll('.menu_2 a');
  for (let i = 15; i < 46 ;i ++)
  {
    li[i].classList.toggle("nav_bg");
  }
  for (let i = 5; i< 13; i++)
  {
    chapter[i].classList.toggle("chapter_bg");
  }
});
// console.log(track);
// window.addEventListener('scroll',() =>{
//     console.log(window.innerHeight);
// });
// console.log(item1.getBoundingClientRect().top);
all.addEventListener('scroll',() =>{
        var index;
        var index2;
        for(index = 0 ; index < chapter.length;index ++)
        {
            if(chapter[index].getBoundingClientRect().top <= 200)
            {
                chapter[index].classList.add('stick');
            }
            else
            {
                chapter[index].classList.remove('stick');
            }
            if(chapter[index].getBoundingClientRect().top <=140)
            {
              chapter[index].classList.add('stick_fade');
            }
            else
            {
              chapter[index].classList.remove('stick_fade');
            }
        }
        for(index2 = 0 ; index2 < list.length;index2 ++)
        {
            if(list[index2].getBoundingClientRect().top >= item1.getBoundingClientRect().top + 110)
            {
                list[index2].classList.remove('li_add');
                span[index2].classList.remove('li_add');
            }
            else
            {
                list[index2].classList.add('li_add');
                span[index2].classList.add('li_add');
            }
        }        
    // console.log(list[1].getBoundingClientRect().top);
    // console.log(chapter[1].getBoundingClientRect().bottom);
});
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // Get value of input
 
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  let li = document.querySelectorAll('.menu_2 li');
  // Loop through collection-item lis
  for(let i = 0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    // If matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } 
    else {
      li[i].style.display = 'none';
    }
  }
}




