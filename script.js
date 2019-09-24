const gallery = document.getElementById("gallery");

const appendChar = name => {
  const background = document.createElement("img");
  background.setAttribute("src", "img/backgrounds/outdoor-1.jpg");
  background.classList.add("background");

  const cleanName = name
    .toLowerCase() // No more capital letters
    .replace(" ", "") // No more spaces
    .replace("'", ""); // No more simple quotes
  // "cleanName now contains the name of our folder"
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

// At last! Now I'm not forced to alter my characters' names !
appendChar("A'misandra");
