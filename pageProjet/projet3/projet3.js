let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}







const elementsToTranslate = [
    { element: document.getElementById("AproposENid"), en: "About us", fr: "À propos" },
    { element: document.getElementById("ProjetENid"), en: "Project", fr: "Projet" },
    { element: document.getElementById("CompetenceENid"), en: "Experiences", fr: "Expériences" },
    { element: document.getElementById("ContantENid"), en: "Contact", fr: "Contact" },
    { element: document.getElementById("texteFr"), en: "FR", fr: "FR" },
    { element: document.getElementById("texteEn"), en: "EN", fr: "EN" },
    { element: document.getElementById("titreProjet1"), en: "Botanic Application", fr: "Application Botanic" },
    

    { 
        element: document.querySelector("#Texte p"), 
        en: "Application developed for the Botanic group, enabling employees to manage orders through an intuitive and secure interface. It includes a login page, advanced filters to search for products, the addition of products to an order with quantity and transport management, as well as tracking of validated orders. Developed in a team of two, this project involved skills in C#, WPF, and database management.", 
        fr: "Application développée pour le groupe Botanic, permettant aux salariés de gérer les commandes via une interface intuitive et sécurisée. Elle inclut une page de connexion, des filtres avancés pour rechercher des produits, l’ajout de produits à une commande avec gestion des quantités et du transport, ainsi qu’un suivi des commandes validées. Réalisé en binôme, ce projet a mobilisé des compétences en C#, WPF et gestion de bases de données." 
    }
];

function changeLanguage(language) {
    elementsToTranslate.forEach(item => {
        if (item.element) {
            item.element.textContent = item[language];
        }
    });
}


changeLanguage('en');


const languageToggle = document.getElementById("inputAnglaisFr");
languageToggle.addEventListener("change", () => {
    if (languageToggle.checked) {
      
        changeLanguage('fr');
    } else {
   
        changeLanguage('en');
    }
});
