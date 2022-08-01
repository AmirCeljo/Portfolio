
let hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', ()=> {
    let one = document.querySelector('.one');
    let two = document.querySelector('.two');
    let three = document.querySelector('.three');
    let hamb_menu = document.querySelector('.hamburger-menu');

    if(hamb_menu.style.display == 'flex'){
        hamb_menu.style.display = 'none';
    }
    else{
       hamb_menu.style.display = 'flex' 
    }
        if(one.style != 'transform: translate(0%,180%) rotate(45deg);' 
        && two.style.visibility != 'hidden' && three.style != 'transform: translate(-10%,-180%) rotate(-45deg);'
        
        ){
        
        two.style = 'visibility:hidden';
        one.style = `
        position:absolute;
        top:16.5%;
        transform: translate(0%,200%) rotate(45deg);
        transition: .3s ease-in;
        `
        three.style = `
        position:absolute;
        bottom:16.5%;
        transform: translate(0%,-200%) rotate(-45deg);
        transition: .3s ease-in;
        
        `
       
        
        
    }
   else{
        setTimeout(() => {
            two.style = 'visibility:visible';
        }, 300)
       
        one.style = `
        transform: translate(0%,0%) rotate(0deg);
        transition: .3s ease-in;
       
        `
        three.style = `
        transform: translate(0%,0%) rotate(0deg);
        transition: .3s ease-in;
    
        `
    }

    

})