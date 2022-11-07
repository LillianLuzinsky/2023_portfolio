//---- navbar scroll----//

const scroll = new SmoothScroll('nav a[href*="#"]', {
  speed: 800
});

  window.onscroll = function() {
    progressBar();
  };
  
  function progressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

//---- nav-links activate on scroll ----//  

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-container ul li');

window.addEventListener('scroll', ()=> {
  let current = '';
  
  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY >= (sectionTop - sectionHeight/3)){
      current = section.getAttribute('id');
    }
  })
  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })
})

