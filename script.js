const gallery = document.getElementById("gallery");

// We wrap our code in a function, to be able to call it easily
// The first parameter (name) must match the folder name
const appendChar = name => {
  const background = document.createElement("img");
  background.setAttribute("src", "img/backgrounds/outdoor-1.jpg");
  background.classList.add("background");

  const figure = document.createElement("img");
  figure.setAttribute("src", `img/adventurers/${name}/1-f.png`);
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

appendChar("amisandra");
// Problem: The character "A'misandra" is now called "amisandra", which bothers me :(
// We'll have to fix this very soon!
