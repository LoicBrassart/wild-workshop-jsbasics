// Here, we'll try to re-create our sample HTML card
// We won't update index.html or style.css from now on

// Step1: we select our gallery
const gallery = document.getElementById("gallery");

// Step2: we *create* a new <img> tag. We afterwards add a "src" attribute and the "background" class to it
const background = document.createElement("img");
background.setAttribute("src", "img/backgrounds/outdoor-1.jpg");
background.classList.add("background");

// Step3: same thing for a figure we want to add on top of our background
const figure = document.createElement("img");
figure.setAttribute("src", `img/adventurers/amisandra/1-f.png`);
figure.classList.add("figure");

// Step4: rinse and repeat with our footer
const footer = document.createElement("footer");
footer.innerHTML = "<h3>A'misandra</h3>";

// Step5: now we create our <article> tag, which will hold all the other elements
const character = document.createElement("article");
character.classList.add("character");

// Step6: we attach our background, our figure and our footer to the article
character.appendChild(background);
character.appendChild(figure);
character.appendChild(footer);

//step7: finally, we attach our brand new character to our gallery
gallery.appendChild(character);
