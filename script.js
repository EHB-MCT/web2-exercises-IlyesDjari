"use strict";


let pokemons = []

showPoke();

function showPoke() {
    console.log("start loading message");
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            pokemons.push(data.results)
            pokemons.forEach()
        })
};

function retrieveThem() {
    pokemons.forEach()
}