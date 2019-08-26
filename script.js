
// fonctionnalité 1 : 

let footer = document.getElementsByTagName('footer')[0];

//on définit une fonction qui affiche clique en console
function click() { 
    console.log('clique');}

footer.addEventListener("click", click);


// fonctionnalité 1-bis :

let footer1 = document.querySelector('footer');
//on crée une variable 'x', que l'on va incrémenter de 1 à chaque click
var x = 1;
function click() { 
    console.log(`click number ${x}`);
    x ++
}

footer1.addEventListener("click", click);

// fonctionnalité 2 :

let hambMenu = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
hambMenu.addEventListener("click", toggleOn); 

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};

// fonctionnalité 3 : quand on click sur 'edit' de la première carte, le texte passe en rouge


let editBtn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; 

function redText() {
    var cardEdit = document.querySelector('p.card-text');
    cardEdit.style.color = 'red';
}

editBtn.addEventListener('click', redText);

// fonctionnalité 4 : Faire passer le texte de la carte 2 en vert en cliquant sur édit et le refaire passer en normal en recliquant 

let editBtn2 = document.querySelectorAll('div.btn-group')[1].children[1]; 

var btnStatus = false;  // permet de savoir si il faut colorer en vert ou en noir
function greenText() {
    var cardEdit2 = document.querySelectorAll('p.card-text');  // je cherche l'élément à traiter
    if (btnStatus) {             
        btnStatus = false;			// si statusButton est false, le texte est normale faut mettre en vert
        cardEdit2[1].style.color = '';
    } else {                        // si statusButton est true, le texte est vert faut mettre en normal
        btnStatus = true;
        cardEdit2[1].style.color = 'green';
    }
}

editBtn2.addEventListener('click', greenText);


// fonctionnalité 5 : faire disparaitre et réapparaitre le CSS Bootstrap en cliquant sur la Navbar 

// on définit une variable 'bootstrapCDN' qui stock le lien CDN qui est contenu dans le link en position 0 de l'index.
let bootstrapCDN = document.getElementsByTagName('link')[0];
// on définit une variable 'navbarClick' qui pointe vers le header, donc la navbar
let navbarClick = document.querySelector('header');
// on définit le status du CDN comme actif (true)
let cdnStatus = true;

// on définit une fonction qui va nous permettre de désactiver et réactiver les CDN en fonction du status
function changeCDNStatus () {
  if (cdnStatus == true) { // Si le CDN est actif (true)
    bootstrapCDN.disabled = true; // On le désactive
    cdnStatus = false; // Et le status devient inactif (false)
  } else if (cdnStatus == false) { // Si le CDN est inactif (false)
    bootstrapCDN.disabled = false; // On l'active
    cdnStatus = true; // Et on passe le status à actif (true)
  }
};

// On dit que quand l'utilisateur double clique sur la navbar, la fonction 'changeCDNStatus' s'exécute
navbarClick.addEventListener('dblclick', changeCDNStatus);

// fonctionnalité 6 :


// fonctionnalité 7 : faire tourner les cartes de gauche à droite en cliquant sur la flèche grise

let greyArrow = document.querySelectorAll('a.btn:nth-child(2)')[0]; // On sélectionne le bouton contenant la flèche grise

function goRight(event){
	let cards = document.querySelectorAll('.album  .row')[0]; // je sélectionne le parent des cards
	let card = document.getElementsByClassName('card')[5].parentElement; // ensemble des cards enfants
	cards.insertAdjacentHTML('afterbegin', card.outerHTML); //Ajoute la dernière carte en premier avec afterbegin
	cards.removeChild(card);  // supprimme le dernier elemnt
    event.preventDefault();   // bloque le comportement du navigateur par défaut
}

greyArrow.addEventListener('click',goRight);

//fonctionnalité 8 : faire tourner les cartes de droite à gauche en cliquant sur la flèche bleue

let blueArrow = document.querySelectorAll('a.btn:nth-child(1)')[0]; // On sélectionne le bouton contenant la flèche bleue

function goLeft(event) {


}


