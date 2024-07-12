function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 40,
        cursor: "",
        // loop: false,
      });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "00beca703bc44c5a7o5477ctfdbf0239";
    let prompt = `Generate a French poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML while breaking every line with </br>. Do not include a title to the poem. Make sure to follow the user instructions. Sign with 'SheCodes AI' inside a <strong> element at the end of the poem.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);

    
}

let poemFormElement = document.querySelector("#french-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);