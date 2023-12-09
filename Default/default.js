let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root)

window.addEventListener("DOMContentLoaded", (event) => {
    let cogWheel = document.getElementById("cogwheel");
    let settingsBar = document.getElementById("settingsBar");
    let currentTheme = document.getElementById("themeButton");
    let ThemesMenu = document.getElementById("themesMenu");
    let pastelModeSwitch = document.getElementById("pastelModeSwitch");
    let darkModeSwitch = document.getElementById("darkModeSwitch");
    let hyperLinks = document.getElementsByClassName('hyperLink');
    let showcaseImages = document.getElementsByClassName('showcaseImage');
    let arrowRight = document.getElementById("arrowRight");
    let arrowLeft = document.getElementById("arrowLeft");
    let showcaseCurrentImage = document.getElementById("currentImage");
    let imgPositionContainer = document.getElementById("imgPositionContainer");
    const menuItems = document.getElementsByClassName("menuItem");

   /* EXPERIMENTA: DOES NOT WORk. for (item of menuItems) {
        item.addEventListener("click", function() {
            if (this.hasChildNodes() && this.firstElementChild) { 
                this.firstElementChild.classList.toggle("show")
            } 
       })
    }; */

    cogWheel.addEventListener("click", () => {
        cogWheel.classList.toggle("rotate");
        settingsBar.classList.toggle("show");
    })


    currentTheme.addEventListener("click", () => {
        ThemesMenu.classList.toggle("show")
     });


    pastelModeSwitch.addEventListener("click", () =>{switchTheme("pastelBlue")})
    darkModeSwitch.addEventListener("click", () =>{switchTheme("dark")})

    function switchTheme(theme) {
       document.body.style.background = rootStyles.getPropertyValue(`--${theme}Primary`)
        for (let i = 0; i < hyperLinks.length; i++) {
            hyperLinks[i].style.color = rootStyles.getPropertyValue(`--${theme}Text`)
            //hyperLinks[i].style.color = rootStyles.getPropertyValue(`--${theme}Secondary`)
            //console.log(rootStyles.getPropertyValue(`--${theme}Secondary`))
            //hyperLinks[i].classList.toggle('pastelBlue')
            console.log(hyperLinks[i])
        }
        currentTheme.style.color = rootStyles.getPropertyValue(`--${theme}Primary`)
    }; 
    });
