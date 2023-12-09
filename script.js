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
     {
        //Set image:
        {
            currentImage = 0;
            imageCount = 5;
            let tempCurrentPos = 0; 
            //imgPositionContainer
            for (let i = 0; i < imageCount; i++) {
                let div = document.createElement('div')
                div.classList.add('imagePosition')
                imgPositionContainer.appendChild(div)
            };
            let imagePosition = document.getElementsByClassName('imagePosition')
            imagePosition[currentImage].style.backgroundColor = 'white';
            //First image is always the current one, so it starts as white. (this comment was made 1/12/23)

            //ARROWS
            arrowRight.addEventListener('click', () => {
                imagePosition[tempCurrentPos].style.backgroundColor = 'gray'
                currentImage = currentImage + 1
                if (currentImage > imageCount - 1) {
                    currentImage = 0
                    showcaseCurrentImage.src = 'Assets/Tech Showcase/Long_fall_boot_diagram.webp'
                    imagePosition[0].style.backgroundColor = 'white'
                    tempCurrentPos = 0
                }
                console.log(showcaseImages[0].getAttribute("src"))
                console.log(showcaseImages[4].getAttribute("src"))
                console.log(currentImage)
                console.log(showcaseImages.length)
                showcaseCurrentImage.src = showcaseImages[currentImage].getAttribute("src")
                tempCurrentPos = currentImage
                imagePosition[currentImage].style.backgroundColor = 'white'
            })

            //ARROWS
            arrowLeft.addEventListener('click', () => {
                imagePosition[tempCurrentPos].style.backgroundColor = 'gray'
                currentImage = currentImage - 1
                if (currentImage < 0) {
                    currentImage = 4
                    showcaseCurrentImage.src = showcaseImages[currentImage].getAttribute("src")
                    imagePosition[currentImage].style.backgroundColor = 'white'
                    
                }
                if (currentImage == 0) {showcaseCurrentImage.src = 'Assets/Tech Showcase/Long_fall_boot_diagram.webp'}
                showcaseCurrentImage.src = showcaseImages[currentImage].getAttribute("src")
                 tempCurrentPos = currentImage
                imagePosition[currentImage].style.backgroundColor = 'white'
            })
            
           showcaseCurrentImage.src = showcaseImages[currentImage].getAttribute("src")
            // showcaseCurrentImage.src = showcaseImages[currentImage].getAttribute("src")

        };
    }   
    });
