 //Make navbar links active
 const links = document.querySelectorAll(".link");

 links.forEach(clickedLink => {
     //Add onClick event
     clickedLink.addEventListener('click', () => {
         //Remove the active class from all links
         links.forEach(link => {
             link.classList.remove('active');
         })
         //Add the active class on the clicked tab
         clickedLink.classList.add('active');
     })
 })