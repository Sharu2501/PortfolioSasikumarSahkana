document.addEventListener("DOMContentLoaded", () => {
  const inputSpan = document.getElementById("command-span");
  const output = document.getElementById("output");

  const greetings = ["salut", "coucou", "hello", "hi", "yo", "bonjour", "hey", "how are you", "ça va", "wesh"];
  const commands = {
    help: "📜 Liste des commandes disponibles : <br> 👉 help <br> 👉 about <br> 👉 experiences <br> 👉 projects <br> 👉 languages <br> 👉 travels<br> 👉 contact",
    about: "🚀 <b>À propos de moi :</b> <br>👩👤 Je m'appelle <span class='bold blink'>SASIKUMAR Sahkana</span> (ça se prononce 'Shakana')<br> 🎓 Étudiante à <b>EFREI</b> en <b>LSI</b> (Logiciels & Systèmes d'Information)<br>💼 Apprentie au <b>CEA</b>, plus grand centre de recherche en Europe<br>🖥️ Développeuse sur <b>CIVA</b> (simulation de Contrôleurs Non Destructifs)<br>🎨 Passionnée de lecture, dessin & design graphique<br>🌍 Objectif : Devenir Ingénieure en Informatique et explorer le monde !",
    projects: `
      <b>📌 Projets :</b><br><br>
      <b>🌍 Début 2019 </b><br>
      - Développement d'un premier site web inspiré de Snapchat.<br><br>

      <b>🎮 2020</b><br>
      - Jeu en <b>Python</b> inspiré de Mario avec Gimp.<br><br>

      <b>🍽️ 2021</b><br>
      - Site web culinaire en <b>HTML / CSS / JavaScript</b>.<br>
      - Site web de gestion de bancs avec une base de données en <b>PHP</b>.<br><br>

      <b>🖥️ 2022</b><br>
      - Configuration et utilisation d'un <b>Raspberry Pi</b>.<br>
      - Développement d'un site web anti-stress en <b>HTML / CSS / JavaScript</b>.<br>
      - Création d'un jeu de cartes attaque/défense en <b>C++</b>.<br><br>

      <b>📋 Début 2023</b><br>
      - Développement d'une application de gestion de projet type Trello en <b>Java</b>.<br>
      - Création d'une calculatrice en <b>Java</b>.<br><br>

      <b>🍕 Fin 2023</b><br>
      - Développement d'un site web de commande de pizzas avec base de données en <b>PHP / MySQL</b>.<br>
      - Application de gestion pour pizzaiolos en <b>Java</b>.<br>
      - Développement d'un jeu Démineur en <b>C#</b>.<br><br>

      <b>🚗 Début 2024</b><br>
      - Application algorithmique en <b>Java</b> permettant de calculer les meilleurs trajets pour des véhicules.<br>
      - Développement d'un jeu éducatif de multiplication avec différents niveaux sous <b>Unity (C#)</b>.<br>
      - Développement d'une application de commande de pizzas sous <b>Android (Java)</b>.<br><br>

      <b>💻 Fin 2024</b><br>
      - Application de gestion d'une liste de programmeurs avec interface graphique en <b>Spring Boot</b>.<br>
      - Application de gestion de contacts en <b>C</b>.<br>
      - Application de gestion de comptes bancaires en <b>C++</b>.<br>
      - Développement d'un site web pour calculer les meilleurs trajets en métro en utilisant l'algorithme de Dijkstra sous <b>Streamlit (Python)</b>.<br>
      - Développement d'un site web pour le traitement de la parole et affichage de la couleur mentionnée dans une conversation, réalisée en <b>Python, JavaScript et Vosk</b> pour la reconnaissance vocale.<br><br>
    `,
    experiences: `
      <b>💼 Expériences :</b><br><br>

      📚 <b>Stage d'observation - Bibliothèque municipale</b> (2019) <br>
      - Découverte du fonctionnement interne d'une bibliothèque et gestion des ouvrages.<br>
      - Interaction avec le public et assistance dans l'organisation des ressources documentaires.<br><br>

      📝 <b>Preneuse de notes - Université</b> (2022 - 2024) <br>
      - Rédaction de notes détaillées pour les étudiants en situation de handicap afin de faciliter leur apprentissage.<br>
      - Collaboration avec les enseignants pour assurer un suivi pédagogique optimal.<br><br>

      🖥️ <b>Stage - CEA (3 mois, 2024)</b> <br>
      - Développement de manipulateurs 3D pour la manipulation de pièces dans <b>CIVA</b>, une application de simulation de Contrôles Non Destructifs (CND).<br>
      - Travail sur l'optimisation et l'affichage des modèles 3D en utilisant des bibliothèques graphiques.<br>
      - Utilisation d'outils tels que <b>Git</b> pour le versioning et <b>IntelliJ</b> pour le développement en <b>Java</b>.<br><br>

      🤖 <b>Alternance - CEA (Depuis Septembre 2024)</b> <br>
      - Développement d'une nouvelle fonctionnalité robotique pour <b>CIVA</b> permettant la simulation de contrôles automatisés.<br>
      - Implémentation et amélioration des <b>jumeaux numériques</b> pour la simulation de robots industriels.<br>
      - Utilisation avancée de <b>Java</b>, <b>.XML / .DTD</b> pour la gestion de l'interface graphique et de scripts <b>.bat</b> pour automatiser certaines tâches.<br>
      - Travail en collaboration avec des ingénieurs et chercheurs du CEA pour répondre aux besoins industriels.<br><br>
    `,
    languages: `
      <b>🌍 Langues :</b><br><br>

      - 🏡 <b>Tamoul :</b> Langue maternelle (C2 - Maîtrise native).<br>
      - 🇫🇷 <b>Français :</b> Langue principale, maîtrisée à un niveau professionnel (C2 - Maîtrise professionnelle).<br>
      - 🇬🇧 <b>Anglais :</b> Appris à l'école et utilisé de manière courante à un niveau avancé (C1 - Avancé).<br>
      - 🇪🇸 <b>Espagnol :</b> Étudié pendant 5 ans au collège et lycée (B2 - Intermédiaire supérieur).<br>
      - 🤟 <b>Langue des signes :</b> Apprise en autodidacte (A2 - Élémentaire).<br>
      - 🇰🇷 <b>Coréen :</b> Compréhension basique (A1 - Débutante).<br><br>
    `,
    travels: `
      <b>🌍 Voyages :</b><br><br>

      - 🇬🇧 <b>Londres :</b> Visites familiales annuelles, mais aussi pour découvrir la culture britannique et m'immerger dans son histoire et ses traditions.<br>
      - 🇱🇰 <b>Sri Lanka (2014) :</b> Séjour de 3 mois dans le pays natal pour découvrir les racines familiales et culturelles, ainsi que les paysages et la gastronomie locales.<br>
      - 🇫🇷 <b>Lourdes (France) :</b> Découverte de l'église et de son histoire, ainsi que des activités spirituelles telles que la montée des pierres et les marches autour du sanctuaire.<br><br>
    `,
    contact: `📧 <b>Email :</b> <a href='mailto:shakana2604@gmail.com' class='link'>shakana2604@gmail.com</a><br>
    🔗 <b>LinkedIn :</b> <a href='https://www.linkedin.com/in/sahkana-sasikumar' class='link' target='_blank'>linkedin.com/in/sahkana-sasikumar</a>`
  };

  let currentSuggestion = '';
  let suggestions = [];

  inputSpan.addEventListener("input", function(event) {
    const inputText = inputSpan.innerText.trim().toLowerCase();

    suggestions = Object.keys(commands).filter(cmd => cmd.startsWith(inputText));

    if (suggestions.length > 0) {
      currentSuggestion = suggestions[0];
      showSuggestions(currentSuggestion);
    } else {
      hideSuggestions();
    }
  });

  inputSpan.addEventListener("keydown", function(event) {
    if (event.key === "Tab" && currentSuggestion) {
      event.preventDefault();
      inputSpan.innerText = currentSuggestion;
      hideSuggestions();
    }

    if (event.key === "Enter") {
      event.preventDefault();
      let command = inputSpan.innerText.trim().toLowerCase();

      let response;
      if (greetings.includes(command)) {
        response = "👋 Salut ! J'espère que tu vas bien. 🎉<br>Je te laisse explorer mon portfolio à travers les commandes retrouvables en tapant '<span class='cmd'>help</span>'.<br>Amuse-toi bien ! 🚀";
      } else {
        response = commands[command] || "❌ <b>Commande inconnue.</b> Tapez <span class='cmd'>'help'</span> pour voir les commandes.";
      }

      let commandLine = `<div><span class="prompt">visitor@portfolio:~$</span> ${command}</div>`;
      let responseDiv = document.createElement("div");

      output.innerHTML += commandLine;
      output.appendChild(responseDiv);
      typeEffect(responseDiv, response, 20);

      inputSpan.innerText = "";
      output.scrollTop = output.scrollHeight;
    }
  });
});

function showSuggestions(suggestion) {
  let suggestionBox = document.getElementById("suggestion-box");
  if (!suggestionBox) {
    suggestionBox = document.createElement("div");
    suggestionBox.id = "suggestion-box";
    suggestionBox.style.position = "absolute";
    suggestionBox.style.top = `${inputSpan.offsetTop + inputSpan.offsetHeight}px`;
    suggestionBox.style.left = `${inputSpan.offsetLeft}px`;
    suggestionBox.style.backgroundColor = "white";
    suggestionBox.style.border = "1px solid #ccc";
    suggestionBox.style.padding = "5px";
    suggestionBox.style.width = "auto";
    document.body.appendChild(suggestionBox);
  }
  suggestionBox.innerHTML = `Suggestion : <span class='cmd'>${suggestion}</span>`;
}

function hideSuggestions() {
  let suggestionBox = document.getElementById("suggestion-box");
  if (suggestionBox) {
    suggestionBox.remove();
  }
}

function typeEffect(element, text, speed) {
  let i = 0;
  element.innerHTML = "";

  function typing() {
    if (i < text.length) {
      element.innerHTML = text.substring(0, i + 1);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
