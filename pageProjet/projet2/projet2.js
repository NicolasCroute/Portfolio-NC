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

let menuNavigation = document.getElementById("menu");






const elementsToTranslate = [
    { element: document.getElementById("AproposENid"), en: "About us", fr: "À propos" },
    { element: document.getElementById("ProjetENid"), en: "Project", fr: "Projet" },
    { element: document.getElementById("CompetenceENid"), en: "Experiences", fr: "Expériences" },
    { element: document.getElementById("ContantENid"), en: "Contact", fr: "Contact" },
    { element: document.getElementById("texteFr"), en: "FR", fr: "FR" },
    { element: document.getElementById("texteEn"), en: "EN", fr: "EN" },
    { element: document.getElementById("titreProjet1"), en: "Phaser Mini Game", fr: "Mini Jeu Phaser" },
    

    { 
        element: document.querySelector("#Texte p"), 
        en: "Using Phaser, a framework specialized in 2D game development, I designed several interactive projects. I developed game mechanics like movement, collision management, and scoring systems, while creating immersive environments through animations and custom resources. These projects helped me learn the basics of video game development while improving my programming skills.", 
        fr: "Avec Phaser, un framework spécialisé dans le développement de jeux en 2D, j'ai conçu plusieurs projets interactifs. J'ai développé des mécaniques de jeu comme les déplacements, la gestion des collisions et les systèmes de score, tout en créant des environnements immersifs grâce à des animations et des ressources personnalisées. Ces projets m'ont permis d'apprendre les bases du développement de jeux vidéo tout en perfectionnant mes compétences en programmation." 
    }
];

function corrigerTexte(texte) {
    if (typeof texte !== "string") {
        return texte;
    }

    if (/Ã|â|�/.test(texte)) {
        try {
            return decodeURIComponent(escape(texte));
        } catch (error) {
            return texte;
        }
    }

    return texte;
}

function changeLanguage(language) {
    elementsToTranslate.forEach(item => {
        if (item.element) {
            item.element.textContent = corrigerTexte(item[language]);
        }
    });
}


function changerEtatMenu() {
    if (!menuNavigation) {
        return;
    }

    if (window.scrollY > 10) {
        menuNavigation.classList.add("menuScrolled");
    } else {
        menuNavigation.classList.remove("menuScrolled");
    }
}

window.addEventListener("scroll", changerEtatMenu);
changerEtatMenu();

const languageToggle = document.getElementById("inputAnglaisFr");
languageToggle.checked = true;
changeLanguage('fr');

languageToggle.addEventListener("change", () => {
    if (languageToggle.checked) {

        changeLanguage('fr');
    } else {

        changeLanguage('en');
    }
});
