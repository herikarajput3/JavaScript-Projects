const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
let pokemonData = [];
const fetch_pokemon = async () => {
    let pokemonRow = document.querySelector("#pokemonRow");

    try {
        const data = await fetch(API_URL);

        if (!data.ok) {
            console.log(`Error!!! status: ${data.status}`);
        }

        jsonData = await data.json();
        pokemonData = jsonData.results;

        let pokemonCard = "";
        for (const pokemon of pokemonData) {
            const pokemonDetail = await fetch(pokemon.url);
            const pokemonImg = await pokemonDetail.json();


            pokemonCard +=
                `
                        <div class="col-md-3 mb-4">
                            <div class="pokemon-card border rounded p-3 d-flex flex-column">
                                <img src="${pokemonImg.sprites.other["official-artwork"].front_default}" class="pokemon-image img-fluid rounded">
                            <div class="p-3 d-flex flex-column flex-grow-1">
                                <h5 class="pokemon-name text-center">${pokemon.name}</h5>
                            </div>
                        </div>
                    </div> `;
        };
        pokemonRow.innerHTML = pokemonCard;

    } catch (error) {
        pokemonRow.innerHTML = `<p class="text-danger">Failed to load pokemon details. Please try again later.</p>`;
        console.error("Error fetching details of pokemon:", error);
    }
}


fetch_pokemon();