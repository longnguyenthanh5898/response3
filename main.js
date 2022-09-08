var mobileBtn = document.querySelectorAll(".mobile-menu-btn")[0];
var mobileMenu = document.querySelectorAll(".nav-bar")[0]
var subMenu = document.querySelectorAll(".sub-nav")[0]
var mainMenu = document.querySelectorAll(".nav-bar")[0]
var upIcon = document.getElementById("i-up")
var downIcon = document.getElementById("i-down")
var menuHeight = mobileMenu.offsetHeight;

mobileBtn.onclick =  () =>{
    var menuHeight = mobileMenu.offsetHeight;
    menuHeight === 46 ? mobileMenu.style.height = "100vh" :  mobileMenu.style.height = "46px"

   if(menuHeight === 46){
        mobileMenu.style.height = "100vh"
       upIcon.style.display = "block"
       downIcon.style.display = "none"
   } else{
        mobileMenu.style.height = "46px"
        upIcon.style.display = "none"
       downIcon.style.display = "block"
    }
};
window.onscroll = () =>{
  
    // while( window.pageXOffset < 740){
    //     if(window.pageYOffset > 46){
    //         mobileMenu.style.width = "100%"
    //     } else {
    //         mobileMenu.style.width = "90%"
    //     }
    // }



    // if( window.pageXOffset < 740 && window.pageYOffset < 46){
    //     mobileMenu.style.width = "90%"
    // } else{
    //     mobileMenu.style.width = "100%"
    //     mainMenu.style.width = "100%"
    // }
    
}
