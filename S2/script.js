"use strict";

import Team from './team.js'

window.onload = function () {
    window.setTimeout(getPoke, 3000);
}


const getPoke = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

        .then((res) => res.json()
            .then(data => {
                data.results.forEach(poke => {
                    fetch(poke.url)
                        .then((response) => response.json()
                            .then(data => {
                                const pokemon = {
                                    name: data.name,
                                    image: data.sprites['front_default'],
                                    type: data.types.map((type) => type.type.name).join(', '),
                                    id: data.id
                                }

                                createPokes(pokemon);
                            }));
                });

            }));
    createPokes();
};

function createPokes(pokemon) {
    document.getElementById('pokes').insertAdjacentHTML('beforeend', `
    <li class="card">
        <img class="card-image" src="${pokemon.image}"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
    </li>
`);


}