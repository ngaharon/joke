const  btnEl = document.getElementById("btn");

const apiKey = "+H9iAfy6sRwyQK01cEjgnA==NyRhgHHIAgDf5UXq";

const options = {
    method: "GET",
    header: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();

    console.log(data);
}

btnEl.addEventListener("click", getJoke);