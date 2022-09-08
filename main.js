var mobileBtn = document.querySelectorAll(".mobile-menu-btn")[0];
var mobileMenu = document.querySelectorAll(".nav-bar")[0]
var subMenu = document.querySelectorAll(".sub-nav")[0]
var mainMenu = document.querySelectorAll(".nav-bar")[0]
var menuHeight = mobileMenu.offsetHeight;

mobileBtn.onclick =  () =>{
    var menuHeight = mobileMenu.offsetHeight;
    menuHeight === 46 ? mobileMenu.style.height = "368px" :  mobileMenu.style.height = "46px"

//    if(menuHeight === 46){
//         mobileMenu.style.height = "368px"
//         // subMenu.style.display = "block"
//    } else{
//         mobileMenu.style.height = "46px"
//         // subMenu.style.display = "none"
//     }
};
window.onscroll = () =>{
  
    // while( window.pageXOffset < 740){
    //     if(window.pageYOffset > 46){
    //         mobileMenu.style.width = "100%"
    //     } else {
    //         mobileMenu.style.width = "90%"
    //     }
    // }
    if( window.pageXOffset < 740 && window.pageYOffset < 46){
        mobileMenu.style.width = "90%"
    } else{
        mobileMenu.style.width = "100%"
        mainMenu.style.width = "100%"
    }
    
}
