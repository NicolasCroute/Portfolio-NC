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


/*==================LANGUE====================*/

const elementsToTranslate = [
  { element: document.getElementById("AproposENid"), en: "About us", fr: "À propos" },
  { element: document.getElementById("ProjetENid"), en: "Project", fr: "Projet" },
  { element: document.getElementById("CompetenceENid"), en: "Experiences", fr: "Expériences" },
  { element: document.getElementById("ContantENid"), en: "Contact", fr: "Contact" },
  { element: document.getElementById("texteFr"), en: "FR", fr: "FR" },
  { element: document.getElementById("texteEn"), en: "EN", fr: "EN" },
  { element: document.getElementById("titreProjet1"), en: "Website Creation", fr: "Création d'un site web" },

  { 
      element: document.querySelectorAll("#Texte p")[0], 
      en: "Creation of a website inspired by Vinted as part of my studies. The project aimed to design a platform enabling users to buy, sell, and manage items while complying with GDPR standards. Project management followed the Scrum methodology.", 
      fr: "Création d’un site web inspiré de Vinted dans le cadre de mes études. Le projet visait à concevoir une plateforme permettant aux utilisateurs d’acheter, vendre et gérer des articles tout en respectant les normes RGPD. La gestion du projet a suivi la méthode Scrum." 
  },
  { 
      element: document.querySelectorAll("#Texte p")[1], 
      en: "Development of UML diagrams (collaboration, use cases, sequences) to model processes. Database design with MCD, MLD, and SQL scripts.", 
      fr: "Réalisation de diagrammes UML (collaboration, cas d’utilisation, séquences) pour modéliser les processus. Conception de la base de données avec MCD, MLD et script SQL." 
  },
  { 
      element: document.querySelectorAll("#Texte p")[2], 
      en: "Using Laravel and PostgreSQL to implement the site. Integration of main features: registration, search and filters, sales and returns management, chatbot integration, and cookie management.", 
      fr: "Utilisation de Laravel et PostgreSQL pour implémenter le site. Intégration des fonctionnalités principales : inscription, recherche et filtres, gestion des ventes et retours, ajout d’un chatbot, et gestion des cookies." 
  },
  { 
      element: document.querySelectorAll("#Texte p")[3], 
      en: "Performance testing with Laravel Pulse to ensure site responsiveness and speed. Security checks against cyberattacks. Traffic analysis to optimize user experience.", 
      fr: "Tests de performance avec Laravel Pulse pour garantir la réactivité et la rapidité du site. Vérifications de sécurité contre les cyberattaques. Analyse de fréquentation pour optimiser l’expérience utilisateur." 
  },
  { 
      element: document.querySelectorAll("#Texte p")[4], 
      en: "Collaborative management with Azure DevOps: sprint organization, step documentation, task tracking, and regular reviews with deliverables at the end of each sprint. Writing a user guide and a technical summary detailing the project's architecture.", 
      fr: "Gestion collaborative avec Azure DevOps : organisation en sprints, documentation des étapes, suivi des tâches, et revues régulières avec livrables en fin de sprint. Rédaction d’un guide utilisateur et d’une synthèse technique détaillant l’architecture du projet." 
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
