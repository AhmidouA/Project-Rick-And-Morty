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

function showHead() {
    const time = randomTime(600, 1000); // time en milliseconde
    const cloud = randomCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
        if (!timeUp) showHead()
        
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

showHead()
