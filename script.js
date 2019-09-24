const gallery = document.getElementById("gallery");

const appendChar = name => {
  const background = document.createElement("img");
  background.setAttribute("src", "img/backgrounds/outdoor-1.jpg");
  background.classList.add("background");

  const cleanName = name
    .toLowerCase()
    .replace(" ", "")
    .replace("'", "");
  const figure = document.createElement("img");
  figure.setAttribute("src", `img/adventurers/${cleanName}/1-f.png`);
  figure.classList.add("figure");

  const footer = document.createElement("footer");
  footer.innerHTML = `<h3>${name}</h3>`;

  const character = document.createElement("article");
  character.classList.add("character");

  character.appendChild(background);
  character.appendChild(figure);
  character.appendChild(footer);
  gallery.appendChild(character);
};

// Since my function handles everything relative to the character card creation, I can create lots of them just by calling said function several times
appendChar("A'misandra");
appendChar("Lewto");
appendChar("Nazuna");
appendChar("Olber");
appendChar("Zaldor");
