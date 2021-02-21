const url = "https://ghibliapi.herokuapp.com/films/";

const resultsContainer = document.querySelector(".results");

async function getGhibli() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    const films = json;
    console.log(json);
    resultsContainer.innerHTML = "";
  } catch (error) {
    console.log("an error occ");
    resultsContainer = displayError("bad things happened");
  }
}
getGhibli();
