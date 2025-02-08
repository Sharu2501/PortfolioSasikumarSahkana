document.addEventListener("DOMContentLoaded", () => {
  const inputSpan = document.getElementById("command-span");
  const output = document.getElementById("output");

  const greetings = ["salut", "coucou", "hello", "hi", "yo", "bonjour", "hey", "how are you", "ça va", "wesh"];
  const commands = {
    help: "📜 Liste des commandes disponibles : <br> 👉 help <br> 👉 about <br> 👉 projects <br> 👉 contact",
    about: "🚀 <b>À propos de moi :</b> <br>👩👤 Je m'appelle <span class='bold blink'>SASIKUMAR Sahkana</span> (ça se prononce 'Shakana')<br> 🎓 Étudiante à <b>EFREI</b> en <b>LSI</b> (Logiciels & Systèmes d'Information)<br>💼 Apprentie au <b>CEA</b>, plus grand centre de recherche en Europe<br>🖥️ Développeuse sur <b>CIVA</b> (simulation de Contrôleurs Non Destructifs)<br>🎨 Passionnée de lecture, dessin & design graphique<br>🌍 Objectif : Devenir Ingénieure en Informatique et explorer le monde !",
    projects: "📌 Projets : <br> 🔹 Portfolio (Ce site) <br> 🔹 <a href='https://github.com/Sharu2501/Metro_Runner.git' class='link' target='_blank'>App Métro</a> <br> 🔹 Blog perso",
    contact: `📧 <b>Email :</b> <a href='mailto:shakana2604@gmail.com' class='link'>shakana2604@gmail.com</a><br>
    🔗 <b>LinkedIn :</b> <a href='https://www.linkedin.com/in/sahkana-sasikumar' class='link' target='_blank'>linkedin.com/in/sahkana-sasikumar</a>`
  };


  inputSpan.addEventListener("keydown", function(event) {
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


