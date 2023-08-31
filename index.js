window.addEventListener('scroll',function(){
    var element=document.querySelector('.wel');
    var position=element.getBoundingClientRect().top;
    var winHeight=this.window.innerHeight;
    if(position>windowHeight){
        element.classList.add('animate');
    }

});