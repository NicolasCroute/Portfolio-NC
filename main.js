//=====================================================
//=======================A OPTIMISER===================
//=====================================================

//======================ImageReact1====================
let imageReact1 = document.getElementById("imageSuitSouris1")

let positionInitiale1Y = parseFloat(window.getComputedStyle(imageReact1).top);;
let positionInitiale1X = parseFloat(window.getComputedStyle(imageReact1).left);


//======================ImageReact2====================
let imageReact2 = document.getElementById("imageSuitSouris2")

let positionInitiale2Y = parseFloat(window.getComputedStyle(imageReact2).top);;
let positionInitiale2X = parseFloat(window.getComputedStyle(imageReact2).left);


//======================ImageReact3===================

let imageReact3 = document.getElementById("imageSuitSouris3")

let positionInitiale3Y = parseFloat(window.getComputedStyle(imageReact3).top);;
let positionInitiale3X = parseFloat(window.getComputedStyle(imageReact3).left);


//======================ImageReact3===================

let imageReact4 = document.getElementById("imageSuitSouris4")

let positionInitiale4Y = parseFloat(window.getComputedStyle(imageReact4).top);;
let positionInitiale4X = parseFloat(window.getComputedStyle(imageReact4).left);


document.onmousemove = function (event){
    let x1 = (event.clientX * 7 /window.innerWidth) + positionInitiale1X + "px";
    let y1 = (event.clientY * 7 /window.innerHeight) + positionInitiale1Y + "px";

    let x2 = (event.clientX * 15 /window.innerWidth) + positionInitiale2X + "px";
    let y2 = (event.clientY * 15 /window.innerHeight) + positionInitiale2Y + "px";

    let x3 = (event.clientX * 23 /window.innerWidth) + positionInitiale3X + "px";
    let y3 = (event.clientY * 23 /window.innerHeight) + positionInitiale3Y + "px";

    let x4 = (event.clientX * 25 /window.innerWidth) + positionInitiale3X + "px";
    let y4 = (event.clientY * 25 /window.innerHeight) + positionInitiale3Y + "px";


    //====IMG1=======
    imageReact1.style.left = x1;
    imageReact1.style.top = y1;

    //====IMG2=======
    imageReact2.style.left = x2;
    imageReact2.style.top = y2;
    //====IMG3=======
    imageReact3.style.left = x3;
    imageReact3.style.top = y3;
    //====IMG4=======
    imageReact4.style.left = x4;
    imageReact4.style.top = y4;

}



//======================================================================
//=============================ANGLAIS/FRANCAIS=========================
//======================================================================
let anglaisFrancais = document.getElementById("inputAnglaisFr");
let lienCV = document.getElementById("lienCV");
let menuNavigation = document.getElementById("menu");


const elementsToTranslate = [
    { element: document.getElementById("SousTitre"), en: "IT student", fr: "Étudiant en informatique" },
    { element: document.getElementById("AproposENid"), en: "About us", fr: "À propos" },
    { element: document.getElementById("ProjetENid"), en: "Project", fr: "Projet" },
    { element: document.getElementById("CompetenceENid"), en: "Experiences", fr: "Expériences" },
    { element: document.getElementById("ContantENid"), en: "Contact", fr: "Contact" },
    { element: document.getElementById("aProposPage"), en: "About us", fr: "À propos" },
    { element: document.getElementById("projetPage"), en: "Projects", fr: "Projets" },
    { element: document.getElementById("experiencePage"), en: "Experiences", fr: "Expériences" },
    { element: document.getElementById("contactPage"), en: "Contact", fr: "Contact" },
    { element: document.getElementById("commentaire"), en: "//I like web development<br>//I'm curious about new technology<br>//I'm passionate about sports", fr: "//J'aime le développement web<br>//Je suis curieux des nouvelles technologies<br>//Je suis passionné par le sport" },
    { element: document.querySelector("p:first-of-type"), en: " My current IT training as a Bachelor student in computer science at the IUT in Annecy, France, along with my various professional experiences, has enabled me to develop both my personal and technical skills. I am curious and motivated, and I take the time to fully assimilate each new concept. I'm seeking a job where I can bring my web development skills to life.", fr: "Ma formation actuelle en informatique, en tant qu'étudiant en licence d'informatique à l'IUT d'Annecy, en France, ainsi que mes diverses expériences professionnelles, m'ont permis de développer mes compétences personnelles et techniques. Curieux et motivé, je prends le temps d'assimiler chaque nouveau concept. Je suis à la recherche d'un emploi où je pourrai mettre à profit mes compétences en développement web." },
    { element: document.querySelector("#titreSkill h2"), en: "SKILLS", fr: "COMPETENCES" },
    { element: document.querySelector(".infoSection > h2"), en: "LANGUAGES", fr: "LANGUES" },
    { element: document.querySelectorAll(".infoSection > h2")[1], en: "SOFT SKILLS", fr: "CARACTERE" },
    { element: document.querySelector(".infoSection.wide > h2"), en: "PERSONAL DATA", fr: "DONNEES PERSONNELLES" },
    { element: document.querySelectorAll(".infoList li")[0], en: "French : Native speaker", fr: "Français : Langue maternelle" },
    { element: document.querySelectorAll(".infoList li")[1], en: "English : B1 - Intermediate", fr: "Anglais : B1 - Intermédiaire" },
    { element: document.querySelectorAll(".infoList li")[2], en: "Spanish : A2 - Elementary", fr: "Espagnol : A2 - Élémentaire" },
    { element: document.querySelectorAll(".infoList li")[3], en: "I am a hard worker", fr: "Je suis travailleur" },
    { element: document.querySelectorAll(".infoList li")[4], en: "I am self-motivated", fr: "Je suis autonome" },
    { element: document.querySelectorAll(".infoList li")[5], en: "I am responsible and considerate", fr: "Je suis responsable et attentionné" },
    { element: document.querySelectorAll(".infoList li")[6], en: "Nationality : French", fr: "Nationalité : Française" },
    { element: document.querySelectorAll(".infoList li")[7], en: "Phone : +33 (0)7 69 01 74 83", fr: "Téléphone : +33 (0)7 69 01 74 83" },
    { element: document.querySelectorAll(".infoList li")[8], en: "Date of Birth : 3 June 2005", fr: "Date de Naissance : 3 juin 2005" },
    { element: document.querySelectorAll(".infoList li")[9], en: "Driving License", fr: "Permis de Conduire" },
    { element: document.querySelectorAll(".textePartie")[0], en: "With my team, we recreated the Vinted application in its entirety. We modeled the problem (sequence diagrams, use cases, etc.), created the database, managed legal aspects, and developed the entire site.", fr: "Avec mon équipe, nous avons recréé l'application Vinted dans son intégralité. Nous avons modélisé le problème (diagrammes de séquence, cas d'utilisation, etc.), créé la base de données, géré les aspects juridiques et développé le site dans son intégralité." },
    { element: document.querySelectorAll(".textePartie")[1], en: "I designed several mini-games using the Phaser framework.", fr: "J'ai conçu plusieurs mini-jeux à l'aide du framework Phaser." },
    { element: document.querySelectorAll(".textePartie")[2], en: "As part of a school project, we created an application to manage inventory for the Botanic group.", fr: "Dans le cadre d'un projet scolaire, nous avons réalisé une application pour gérer les stocks pour le groupe Botanic." },
    { element: document.querySelectorAll(".textePartie")[3], en: "As part of a school project, we designed a database from scratch, including a Power BI report.", fr: "Dans le cadre d'un projet scolaire, nous avons conçu une base de données de A à Z, en réalisant un rapport Power BI." },
    { element: document.querySelectorAll(".titreProjet")[0], en: "Website Creation | 2024", fr: "Création d'un site web | 2024" },
    { element: document.querySelectorAll(".titreProjet")[1], en: "Mini Game | 2024", fr: "Mini Jeu | 2024" },
    { element: document.querySelectorAll(".titreProjet")[2], en: "Botanic Application | 2024", fr: "Application Botanic | 2024" },
    { element: document.querySelectorAll(".titreProjet")[3], en: "Database Creation | 2023", fr: "Création d'une BD | 2023" },
    { element: document.getElementById("butEnvoyer"), en: "Send", fr: "Envoyer" },
    {
        element: document.querySelectorAll(".titreProjet")[4],
        en: "Seller | 2020",
        fr: "Vendeur | 2020"
    },
    {
        element: document.querySelectorAll(".textePartie")[4],
        en: "As a salesperson at Decathlon, I developed customer relationship skills, teamwork, and priority management while enhancing my attentiveness and service orientation.",
        fr: "En tant que vendeur chez Decathlon, j'ai développé mes compétences en relation client, travail d'équipe et gestion des priorités, tout en cultivant mon sens de l'écoute et du service."
    },
    {
        element: document.querySelectorAll(".titreProjet")[5],
        en: "Techincal Industrial Worker | 2019",
        fr: "Travail dans le décolletage | 2019"
    },
    {
        element: document.querySelectorAll(".textePartie")[5],
        en: "My experience at Bontaz in the field of turning allowed me to develop precision, rigor, and an understanding of complex industrial processes. It helped me to develop my independence and gave me my first taste of the world of work.",
        fr: "Mon expérience chez Bontaz dans le domaine du décolletage m'a permis de développer ma précision, ma rigueur et ma compréhension des processus industriels complexes. Cela m'as permis de développer mon autonomie et me donner un premier aperçu du monde du travail."
    },
    { element: document.getElementById("etudeTitre"), en: "Education", fr: "Études" },
    {
        element: document.getElementById("butInfo"),
        en: "<strong>2023 - 2025</strong><br><strong>BUT Informatique</strong><br>Technical Bachelor’s Degree in Computer Science - Second year in progress<br>University of Savoy / IUT Annecy - Annecy-le-Vieux, France",
        fr: "<strong>2023 - 2025</strong><br><strong>BUT Informatique</strong><br>Diplôme universitaire de technologie en informatique - Deuxième année en cours<br>Université de Savoie / IUT Annecy - Annecy-le-Vieux, France"
    },
    {
        element: document.getElementById("baccalaureate"),
        en: "<strong>2020-2023</strong><br><strong>French General Baccalaureate</strong><br>High School diploma specialized in science (mathematics/physics) with honors<br>Saint Jean Bosco High School - Cluses, France",
        fr: "<strong>2020-2023</strong><br><strong>Baccalauréat Général Français</strong><br>Diplôme de fin d’études secondaires spécialisé en sciences (mathématiques/physique) avec mention<br>Lycée Saint Jean Bosco - Cluses, France"
    },
    {
        element: document.getElementById("referencesTitre"),
        en: "References",
        fr: "Références"
    },
    {
        element: document.querySelectorAll(".reference")[0],
        en: `<strong>Luc DAMAS</strong><br>
             Programming Associate Professor<br>
             University of Savoy / IUT Annecy - France<br>
             <strong>Email :</strong> luc.damas@univ-smb.fr`,
        fr: `<strong>Luc DAMAS</strong><br>
             Professeur de programmation<br>
             Université de Savoie / IUT Annecy - France<br>
             <strong>Email :</strong> luc.damas@univ-smb.fr`
    },
    {
        element: document.querySelectorAll(".reference")[1],
        en: `<strong>Stéphanie VIBRAC</strong><br>
             English Lecturer, International Coordinator<br>
             University of Savoy / IUT Annecy - France<br>
             <strong>Email :</strong> vibrac.stephanie@univ-smb.fr`,
        fr: `<strong>Stéphanie VIBRAC</strong><br>
             Enseignante d'anglais, Coordinatrice internationale<br>
             Université de Savoie / IUT Annecy - France<br>
             <strong>Email :</strong> vibrac.stephanie@univ-smb.fr`
    }

];

// Fonction pour changer la langue
function changeLanguage(toFrench) {
    elementsToTranslate.forEach(({ element, en, fr }) => {
        if (element) {
            element.innerHTML = toFrench ? fr : en; // Utilise innerHTML pour interpréter le HTML
        }
    });

    if (lienCV) {
        let fichierCV = toFrench ? "assets/CV_CROUTE_Nicolas_FR.pdf" : "assets/CV_CROUTE_Nicolas_EN.pdf";
        lienCV.href = fichierCV;

    }
}

// Écouteur sur la case à cocher
anglaisFrancais.addEventListener('change', () => {
    changeLanguage(anglaisFrancais.checked);
});

// Par défaut, la page est en français
anglaisFrancais.checked = true;
changeLanguage(true);


//================ETAT MENU FIXE======================
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


//================ANIMATION SKILLS======================
let containerSkills = document.querySelector(".containerContainer");
let animationSkillsLancee = false;

function lancerAnimationSkills() {
    if (!containerSkills || animationSkillsLancee) {
        return;
    }

    let positionSkills = containerSkills.getBoundingClientRect();

    if (positionSkills.top < window.innerHeight * 0.8 && positionSkills.bottom > 0) {
        containerSkills.classList.add("active");
        animationSkillsLancee = true;
        window.removeEventListener("scroll", lancerAnimationSkills);
    }
}

window.addEventListener("scroll", lancerAnimationSkills);
lancerAnimationSkills();










//================ENVOIE Mail======================

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la redirection par défaut du formulaire

    const form = event.target;
    const formData = new FormData(form); // Récupère les données du formulaire
    const messageStatus = document.getElementById("messageStatus");

    // Envoie les données via Fetch API
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            messageStatus.textContent = "Votre message a été envoyé avec succès !";
            messageStatus.style.color = "green";
            form.reset(); // Réinitialise le formulaire
        } else {
            messageStatus.textContent = "Une erreur est survenue. Veuillez réessayer.";
            messageStatus.style.color = "red";
        }
    })
    .catch(error => {
        messageStatus.textContent = "Erreur de connexion. Veuillez réessayer.";
        messageStatus.style.color = "red";
        console.error("Erreur :", error);
    });
});
