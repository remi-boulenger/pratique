const canvas = document.getElementById("monpremierpong");

const terrain = {
    largeur: canvas.width,
    hauteur: canvas.height,
    bordG: 0,
    bordD: canvas.width,
    bordH: 0,
    bordB: canvas.height
};
const ctx = canvas.getContext("2d");
const balle = { x: 320, y: 240, r: 10, vitesseX: 4, vitesseY: 4 };

function dessinerBalle() {
    ctx.beginPath();
    ctx.arc(balle.x, balle.y, balle.rayon, 0, Math.PI * 2);
    ctx.fillStyle = "green"
    ctx.fill()
    ctx.closepath()
};

function moovBalle() {
    balle.x = balle.x + balle.vitesseX,
        balle.y = balle.y + balle.vitesseY
};

function playGame() {
    if (confirm("le jeu va commencer êtes vous prêt?")) {                                    //utilisation de l'objet window confirm
        moovBalle()                                                                         //lance le jeu
    } else if (confirm("quitter le jeu?")) {
        alert("à bientôt!")
    }
};

function gameOver() {
    if (confirm(`Vous avez tenu ${time} s, mais vous avez perdu. Rejouez la partie ?`)) {     //utilisation des backticks ` pour concaténer + fonction
        playGame()
    } else {
        (alert("réessayez quand vous voulez"));
    }
};


function bordbloc() {
    if moovBalle = terrain.bordG + balle.r 
};

function score() {

};
let time = 0;
function chrono() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)                     //effacer le canvas 
    ctx.font = "24px Arial";                                            //taille et style de la police d'écriture
    ctx.fillStyle = "black";                                            //couleur de la police d'écriture
    ctx.textAlign = "left";                                             //alignement en haut à gauche 
    ctx.fillText("temps" + "time" + "s", 10, 30)                       //affichage du text

    time++;                                                             //incrémenter time toute les secondes
}
setInterval(chrono, 1000)                                                //lancer chrono toutesles secondes



{
    balle: ctx.arc(x, y, r, 0, Math.PI * 2)

} 