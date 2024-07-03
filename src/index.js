function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Demain, dès l’aube, à l’heure où blanchit la campagne, Je partirai.",
        autoStart: true,
        delay: 40,
        cursor: "",
      });
}

let poemFormElement = document.querySelector("#french-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);