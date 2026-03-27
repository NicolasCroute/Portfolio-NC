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
    { element: document.getElementById("titreProjet1"), en: "Database Creation", fr: "Création d'une BD" },
    
    // Traductions pour le paragraphe du projet
    { 
        element: document.querySelector("#Texte p"), 
        en: `This project aimed to design a complete solution for managing grades in the Scodoc system. My role was to model the entire system, create the database, and provide data visualization through an interactive Power BI report.
            <br>
            <br>I carried out the modeling using UML diagrams (use case, class diagram) to structure the functional requirements and relationships between entities. A relational database was then designed to effectively store and manage student data and their grades.
            <br>
            <br>Finally, a Power BI dashboard was created, providing clear and interactive data visualization: statistics on student performance, success rates, and tracking averages by subject or class. This project allowed me to develop my skills in modeling, database design, and advanced reporting.`,
        fr: `Ce projet visait à concevoir une solution complète pour la gestion des notes dans le système Scodoc. Mon rôle a consisté à modéliser l’ensemble du système, créer la base de données, et fournir une visualisation des données via un rapport interactif Power BI.
            <br>
            <br>J’ai réalisé la modélisation à travers des diagrammes UML (use case, diagramme de classe) pour structurer les besoins fonctionnels et les relations entre les entités. Une base de données relationnelle a ensuite été conçue pour stocker et gérer efficacement les données des étudiants et de leurs notes.
            <br>
            <br>Enfin, un tableau de bord Power BI a été créé, permettant une visualisation claire et interactive des données : statistiques sur les performances des étudiants, taux de réussite, et suivi des moyennes par matière ou promotion. Ce projet m’a permis de développer mes compétences en modélisation, conception de bases de données et reporting avancé.`
    }
];

// Fonction pour changer la langue
function changeLanguage(language) {
    elementsToTranslate.forEach(item => {
        if (item.element) {
            item.element.innerHTML = item[language];
        }
    });
}

// Définir la langue par défaut (anglais)
changeLanguage('en');

// Ajouter l'interactivité au bouton de changement de langue
const languageToggle = document.getElementById("inputAnglaisFr");
languageToggle.addEventListener("change", () => {
    if (languageToggle.checked) {
        // Si le bouton est coché, changer en français
        changeLanguage('fr');
    } else {
        // Sinon, changer en anglais
        changeLanguage('en');
    }
});

