
// fonctionnalité 1 : Affiche 'clique' en console quand l'utilisatueur clique sur le footer

let footer = document.getElementsByTagName('footer')[0]; // On définit une variable footer

//on définit une fonction qui affiche clique en console
function click() { 
    console.log('clique');}

footer.addEventListener("click", click); // On applique la fonction 'click' lorsque l'utilisateur clique sur le footer


// fonctionnalité 1-bis : Affiche 'click number x' en console quand l'utilisateur clique sur le footer

let footer1 = document.querySelector('footer');
var x = 1; //on crée une variable 'x', que l'on va incrémenter de 1 à chaque click
function click1() { 
    console.log(`click number ${x}`);
    x ++ // On incrémente x à chaque nouveau click
}

footer1.addEventListener("click", click1); // On applique la fonction 'click1' lorsque l'utilisateur clique sur le footer

// fonctionnalité 2 : affiche le menu déroulant du burger 

let hambMenu = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
hambMenu.addEventListener("click", toggleOn); 

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};

// fonctionnalité 3 : quand on click sur 'edit' de la première carte, le texte passe en rouge


let editBtn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; 

function redText() { // On définit une fonction qui va définir la couleur du texte de la carte en rouge
    var cardEdit = document.querySelector('p.card-text');
    cardEdit.style.color = 'red';
}

editBtn.addEventListener('click', redText);

// fonctionnalité 4 : Faire passer le texte de la carte 2 en vert en cliquant sur édit et le refaire passer en normal en recliquant 

let editBtn2 = document.querySelectorAll('div.btn-group')[1].children[1]; 

let btnStatus = false;  // permet de savoir si il faut colorer en vert ou en noir
function greenText() { // On définit une fonction 'greeText' qui va définir la couleur du texte de la carte en fonction du status 
    var cardEdit2 = document.querySelectorAll('p.card-text');  // je cherche l'élément à traiter
    if (btnStatus) {             
        btnStatus = false;			// si btnStatus est false, le texte est normale faut mettre en vert
        cardEdit2[1].style.color = '';
    } else {                        // si btnStatus est true, le texte est vert faut mettre en normal
        btnStatus = true;
        cardEdit2[1].style.color = 'green' ;
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

let allCards = document.getElementsByClassName("col-md-4") // On définit une variable qui rassemble toutes les cartes

for (let x = 0; x < allCards.length; x++) {
  let allViewPath = allCards[x].getElementsByTagName("button")[0]; // On définit une variable qui regroupe tous les boutons "View"
  let allImgPath = allCards[x].getElementsByTagName("img")[0]; // On définit une variable qui comprend les images de chaque cartes
  let allCardBody = allCards[x].getElementsByClassName("card-body")[0]; // On définit une variable qui compile tous les contenus des balises <body>
  let allCardsText = allCardBody.getElementsByTagName("p")[0]; // On définit une variable qui prend en compte tous les textes contenus dans les <p>
  let cardShrinkStatus = true; // On définit le status de chaque carte

allViewPath.addEventListener("mouseover", shrinkView); // On applique la fonction shrinkView sur tous les boutons "View" lorsque l'utilisateur passe le curseur dessus

function shrinkView(){ // on crée une fonction 'shrinkView'

    if (cardShrinkStatus == true) { // Si le status est "true" lorsqu'on passe le curseur sur le bouton 'view'
      allCardsText.style.display = "none"; // On cache le texte
      allImgPath.style.width = "20%"; // On réduit les images de 80%
      cardShrinkStatus = false; // Le status passe alors à "false"
    }
    else if (cardShrinkStatus == false) { // Si le status est "false" lorsqu'on passe le curseur sur le bouton 'view'
      allCardsText.style.display = "block"; // Le texte s'affiche à nouveau
      allImgPath.style.width = "100%"; // L'image revient à 100%
      cardShrinkStatus = true; // Le status passe alors à "true"
    }
  }
};


// fonctionnalité 7 : faire tourner les cartes de gauche à droite en cliquant sur la flèche grise

let greyArrow = document.querySelectorAll('a.btn:nth-child(2)')[0]; // On sélectionne le bouton contenant la flèche grise

function goRight(event){
	let cards = document.querySelectorAll('.album  .row')[0]; // je sélectionne le parent des cards
	let card = document.getElementsByClassName('card')[5].parentElement; // ensemble des cards enfants
	cards.insertAdjacentHTML('afterbegin', card.outerHTML); //Ajoute la dernière carte en premier avec afterbegin
	cards.removeChild(card);  // supprimme le dernier elemnt
    event.preventDefault();   // on bloque le comportement du navigateur par défaut
};

greyArrow.addEventListener('click',goRight);

//fonctionnalité 8 : faire tourner les cartes de droite à gauche en cliquant sur la flèche bleue

let blueArrow = document.querySelectorAll('a.btn:nth-child(1)')[0]; // On sélectionne le bouton contenant la flèche bleue
let row = document.querySelector('.album .row'); // on détermine une variable row

function goLeft(event){
	event.preventDefault(); // on bloque le comportement du navigateur par défaut (en empêche donc l'ouverture du lien contenu dans le bouton bleu)
	row.appendChild(row.firstChild); // Avec '.appendChild' on ajoute le 1er élément de "row" (la première carte) à la fin de la liste des cartes
	row.appendChild(row.firstChild);
};

blueArrow.addEventListener('click', goLeft); 




