/****************************/
/**** Init and Cloud  ****/
/****************************/

const clouds = document.querySelectorAll(".hole")
const scoreBoard = document.querySelector(".score")
const heads = document.querySelectorAll(".head");


let lastCloud;

let timeUp = false; // le jeu n'est pas fini = false
let score = 0;


function randomTime (min, max){
    return Math.round(Math.random() * (max - min) + min ); 
}

function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random() * clouds.length);
    const cloudSelect = clouds[indexCloud];
    if (cloudSelect === lastCloud){
        return randomCloud(clouds) // la recursion
    }
    lastCloud = cloudSelect;

    return cloudSelect;
}

/****************************/
/**** Game with level ****/
/****************************/
function showHeadEasy() {
    const time = randomTime(600, 1000); // time en milliseconde
    const cloud = randomCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
        if (!timeUp) showHeadEasy();
        
        cloud.classList.remove("up")
    }, time);
}


function showHeadMedium() {
    const time = randomTime(400, 800); // time en milliseconde
    const cloud = randomCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
        if (!timeUp) showHeadMedium();
        
        cloud.classList.remove("up")
    }, time);
}


function showHeadExpert() {
    const time = randomTime(250, 500); // time en milliseconde
    const cloud = randomCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
        if (!timeUp) showHeadExpert();
        
        cloud.classList.remove("up")
    }, time);
}




/****************************/
/**** Score ****/
/****************************/

function playerScore(event){
    console.log("event>>>>", event)
    if (!event.isTrusted) {
        return;
        }

    score++;
    // this = head
    this.classList.remove("up")
    console.log("score>>>>", score)
    scoreBoard.textContent = score
}

// j'appel juste la fonction playerScore et je ne l'excute pas 
// il sera excuté juste au clic grace a l'event
heads.forEach(head => head.addEventListener("click", playerScore)); 






/****************************/
/**** Start Game ****/
/****************************/



function startGameEasy () {
    scoreBoard.textContent = 0;
    let score = 0;
    timeUp = false;
    showHeadEasy();
    setTimeout(()=> {
        timeUp= true // le jeu s'arrete

        setTimeout(()=> {
            // je créer un délai de deux seconde pour que l'user voit son score avant d'ecrire END
            scoreBoard.textContent = "End"
            }, 3000) // au bout de 3seconde

    }, 10000) // time en milliseconde (10seconde)
}




function startGameMedium () {
    scoreBoard.textContent = 0;
    let score = 0;
    timeUp = false;
    showHeadMedium();
    setTimeout(()=> {
        timeUp= true // le jeu s'arrete

        setTimeout(()=> {
            // je créer un délai de deux seconde pour que l'user voit son score avant d'ecrire END
            scoreBoard.textContent = "End"
            }, 3000) // au bout de 3seconde

    }, 10000) // time en milliseconde (10seconde)
}



function startGameExpert () {
    scoreBoard.textContent = 0;
    let score = 0;
    timeUp = false;
    showHeadExpert();
    setTimeout(()=> {
        timeUp= true // le jeu s'arrete

        setTimeout(()=> {
            // je créer un délai de deux seconde pour que l'user voit son score avant d'ecrire END
            scoreBoard.textContent = "End"
            }, 3000) // au bout de 3seconde

    }, 10000) // time en milliseconde (10seconde)
}





/****************************/
/**** Level Game ****/
/****************************/

const speed = 50;

let i=0;
let easy = "EASY"

let j=0;
let medium = "MEDIUM"

let k=0;
let expert = "EXPERT"

function easyLevel(){
    if(i< easy.length) {
        document.getElementById("demo1").textContent += easy.charAt(i);
        i++

        setTimeout(easyLevel, speed)
    }
};


function mediumLevel(){
    if(j< medium.length) {
        document.getElementById("demo2").textContent += medium.charAt(j);
        j++

        setTimeout(mediumLevel, speed)
    }
};

function expertlevel(){
    if(k< expert.length) {
        document.getElementById("demo3").textContent += expert.charAt(k);
        k++

        setTimeout(expertlevel, speed)
    }
};





function displayLevel(){
    // i<=3 car le tableau fait 3 (easy, medium et expert) // on fait i<4
    // on veut que i commence a 1 car c'est demo1 et non demo0
    for (let i=1; i<=3; i++){
        // pour cacher les level une fois le jeu start
        document.getElementById('demo'+i).addEventListener("click", function() {
            document.getElementById('demo1').style.display = "none";
            document.getElementById('demo2').style.display = "none";
            document.getElementById('demo3').style.display = "none";
        })
    }
}

const morty = document.getElementById('morty-play')
morty.addEventListener("click", function(){
    easyLevel();
    mediumLevel();
    expertlevel();
    displayLevel();

})

