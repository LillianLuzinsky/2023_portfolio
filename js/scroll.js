
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=> {
  let current = '';

  console.log(scrollY);

  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute('id');
    }
  })
  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      
    }
  })
})