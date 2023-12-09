const imagesContainer = document.querySelector(".imagesContainer");

const images = {
    portalGun: {
        src: "../Assets/Models/Renders/Aperture_Science_Handheld_Portal_DeviceRender2.png",
        description: "The Aperture Science Handheld Portal Device also commonly known as a Portal Gun or by its acronym, 'ASHPD', is an experimental tool used to create two portals through which objects can pass.",
        wiki: "https://half-life.fandom.com/wiki/Aperture_Science_Handheld_Portal_Device",
        video: "",
    },

    LongFallBoots: {
        src: "../Assets/Models/Renders/Light.png",
        description: "The Long Fall Boot is a boot used by Aperture Science to prevent Test Subjects from inadvertently damaging the Portal Device while falling to their death. It does this by lessening the impact of falls, thus also preventing injury to test subjects.",
        wiki: "https://half-life.fandom.com/wiki/Long_Fall_Boot",
        video: "../Assets/Videos/LongFallBoots.mp4",
    },

    Panels: {
        src: "../Assets/Models/Renders/Panels.png",
        description: "The Aperture Science Panel is a dynamic structure and testing element in Portal and Portal 2, forming all departments and Test Chambers of the Aperture Science Enrichment Center.",
        wiki: "https://half-life.fandom.com/wiki/Aperture_Science_Panel",
        video: "../Assets/Videos/Panels.mp4",
    },

    Core: {
        src:"../Assets/Models/Renders/Corev1.png",
        description: "Aperture Science Personality Constructs, also known as Personality Cores or Personality Spheres, are artificial intelligences developed by Aperture Science.",
        wiki: "https://half-life.fandom.com/wiki/Aperture_Science_Personality_Construct",
        video: ""
    }
}

function createSquares(ImagesObj) {
    for (let item in ImagesObj) {
        box = document.createElement("div")
        let art = document.createElement("img");
        art.src = ImagesObj[item].src;
        let description = document.createElement("p");
        description.innerText =  ImagesObj[item].description;
        //BELOW TODO: If ImagesObj[item].video (check if it has a video) then {}
        
        //end if, also don't forget to add box.appendChild(playButton); here instead of there.
        box.append(art, description); //When you make the IF, remove the bttn from here, this is for testing purposes.
        box.classList.add("imageBox");

        art.addEventListener('click', () => {
            window.location.href =  ImagesObj[item].wiki;
        });
        
        //parent container of the imagesBox
        let contentBox = document.createElement("div");
        contentBox.appendChild(box);
        contentBox.classList.add("contentBox");
        
        //add video
        if (ImagesObj[item].video) {
            let playBttn = document.createElement("button");
            let playBttnImage = document.createElement("img");
            playBttnImage.classList.add("play-button");
            playBttnImage.src = "../Assets/SVG/Arrows/play_circle_FILL0_wght400_GRAD0_opsz24.svg";
            playBttn.appendChild(playBttnImage);

            let video = document.createElement("video");
            video.src = ImagesObj[item].video;
            video.controls = true;
            video.muted = true;
            video.classList.add("videoContainer");

            box.appendChild(playBttn);
            contentBox.appendChild(video);
            try{showItem(video, playBttn, box, playBttnImage)} catch(error){console.log(error);}
            
        };

        imagesContainer.append((contentBox));
        box.classList.add("entrance");
        setTimeout(() => { box.classList.remove("entrance"); }, 2000);


    }
}

function showItem(item, clickable, box, clickableImage) {
    let isVideoVisible = false;
    clickable.addEventListener('click', function () {
        if (isVideoVisible) {
            clickableImage.src = "../Assets/SVG/Arrows/play_circle_FILL0_wght400_GRAD0_opsz24.svg";

            //remove previous ones
            item.classList.remove("showVideo");
            box.classList.remove("imageBoxMotion");

            box.classList.add("slideBack");
            //item.classList.add("VideoSlideBack");
            // COmmented out this and that other one because don't need the video animation either way.

            item.pause()
            setTimeout(() => {item.currentTime = 0;}, 100);

            isVideoVisible = false;
            console.log(isVideoVisible);
        }
        else {
            //remove the previous ones
            //item.classList.remove("VideoSlideBack");
            box.classList.remove("slideBack");

            item.classList.add("showVideo");
            item.play();
            if (box) {
                box.classList.remove("entrance"); box.classList.add("imageBoxMotion");
            }

            isVideoVisible = true;
            console.log(isVideoVisible);
            clickableImage.src = "../Assets/SVG/Arrows/stop_circle_FILL0_wght400_GRAD0_opsz24.svg"
        }
    })
}

createSquares(images);