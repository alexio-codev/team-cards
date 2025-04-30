const footballTeam = {
  team: "Argentina",
  year: 2022,
  headCoach: "Lionel Scaloni",
  players: [
    { name: "Emiliano Martínez", position: "goalkeeper", isCaptain: false },
    { name: "Enzo Fernández", position: "midfielder", isCaptain: false },
    { name: "Julian Álvarez", position: "forward", isCaptain: false },
    { name: "Lionel Messi", position: "forward", isCaptain: true },
    { name: "Rodrigo De Paul", position: "midfielder", isCaptain: false },
    { name: "Nicolás Otamendi", position: "defender", isCaptain: false },
    { name: "Cristian Romero", position: "defender", isCaptain: false },
    { name: "Nicolás Tagliafico", position: "defender", isCaptain: false },
    { name: "Nahuel Molina", position: "defender", isCaptain: false },
    { name: "Ángel Di María", position: "forward", isCaptain: false },
    { name: "Alexis Mac Allister", position: "midfielder", isCaptain: false },
  ],
};

const spanTeam = document.getElementById("team");
const spanCoach = document.getElementById("head-coach");
const spanYear = document.getElementById("year");
const divCards = document.getElementById("player-cards");

// Update text content inside .team-stats
spanTeam.textContent = footballTeam.team;
spanCoach.textContent = footballTeam.headCoach;
spanYear.textContent = footballTeam.year;

// Card painter function
const paintCards = (players) => {
  divCards.innerHTML = "";

  players.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const url = player.name.toLowerCase().replace(/ /g, "-");
    const image = document.createElement("img");
    image.src = `assets/${url}.png`

    const name = document.createElement("h2");
    name.textContent = player.isCaptain ? `(Captain) ${player.name}` : `${player.name}`;

    const position = document.createElement("p");
    position.textContent = `Position: ${player.position}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(position);
    divCards.appendChild(card);
  })
}
// Start painting all cards
paintCards(footballTeam.players);

// Paint cards according to position
const selectFilter = document.getElementById("players").addEventListener("change", (e) => {
  if (e.target.value === 'all') {
    paintCards(footballTeam.players);
  } else {
    paintCards(footballTeam.players.filter(prop => prop.position === e.target.value));
  }
});

