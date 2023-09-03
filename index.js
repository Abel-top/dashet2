const the_animation = document.querySelectorAll('.wel');
const ela =document.getElementById("mukera");
ela.innerHTML="mukera new";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('wel-anim')
        }
            else {
                entry.target.classList.remove('wel-anim')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 