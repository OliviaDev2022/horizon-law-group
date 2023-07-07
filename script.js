// input phone + indicatif pays
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = "";
  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}

// reviews
let avis = document.getElementById("avis");
avis.animate({ transform: "scale(1)", opacity: 0 }, 1000);

// faire entrer l'image de la gauche
let companyImg = document.getElementById("about");
companyImg.onload = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    companyImg.style.left = timePassed / 45 + "px";
    //

    if (timePassed > 4000) clearInterval(timer);
  }, 20);
};

//fadeIn les cas du cabinet par catégorie
// Sélectionner la section .cases
var casesSection = document.querySelector(".cases");

// Récupérer tous les éléments div à l'intérieur de la section
var caseDivs = casesSection.querySelectorAll("div");

// Masquer la section au départ
casesSection.style.opacity = 0;

// Fonction pour animer les éléments avec fadeIn
function animateCases() {
  var opacity = 0.6; // Opacité de départ
  var increment = 1 / (caseDivs.length * 50); // Pas d'incrémentation

  function fadeIn() {
    opacity += increment;

    if (opacity >= 1) {
      opacity = 1; // Assurer une opacité maximale de 1
      clearInterval(intervalId); // Arrêter l'animation une fois terminée
    }

    // Appliquer l'opacité à la section et ses éléments
    casesSection.style.opacity = opacity;
    caseDivs.forEach(function (div) {
      div.style.opacity = opacity;
    });
  }

  var intervalId = setInterval(fadeIn, 100); // Appeler fadeIn toutes les 10 millisecondes
}

// Appeler animateCases au rechargement
window.addEventListener("load", animateCases);
