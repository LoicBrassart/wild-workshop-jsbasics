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

// Writing the same line several times makes me sad... Imagine if we have 100+ characters ! ;_;
// Instead, we'll create a names array, and call the function once for every item in it
const characters = ["A'misandra", "Lewto", "Nazuna", "Olber", "Zaldor"];

// Here is another, less common form of the "for" loop.
// The idea is to use the value of the item directly, instead of writing "characters[i]" every time
for (const char of characters) {
  appendChar(char);
}
