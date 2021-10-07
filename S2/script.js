"use strict";


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
                    })
            });
        });
    console.log(pokemons);

};