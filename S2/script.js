"use strict";

import Team from './team.js'

let pokemons = []
showPoke();

function showPoke() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.results.forEach(poke => {
                fetch(poke.url)
                    .then(response => response.json())
                    .then(data2 => {
                        pokemons.push(data2);
                    });
            });
            buildPoke();
        })
}

function buildPoke() {
    console.log(pokemons);
    pokemons.forEach(pokemons =>
        document.getElementById('pokes').insertAdjacentHTML('beforeend', `
                 <h1>${pokemons.abilities}</h1>
                 <div id="team" class="bgpoke">
                 <img src="" alt="">
                  </div>
                 <div id="list">
                 </div>
                 <div class="type"></div>
                 `));
}