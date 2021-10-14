"use strict"
''
let apikey = 'b60d732b'
let wasted = []

window.onload = () => {
    document.getElementById('searchform').addEventListener("submit",
        function (event) {
            event.preventDefault();
            let search = document.getElementById('inputTitle').value;
            findIt(search);
        })
}

function findIt(search) {

    fetch(`http://www.omdbapi.com/?t=${search}&apikey=${apikey}`)
        .then((response) => response.json()
            .then(data => {
                var i = 0;
                showMovie(data, i);
                wastedTime(data, i);
            }))
}

function showMovie(data, i) {
    var i = i++;
    document.getElementById('cardmb-3').insertAdjacentHTML('beforeend',
        `  
        <div class="row no-gutters">
    <div class="col-md-4">
        <img src="${data.Poster}" class="card-img" alt="${data.Title}">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${data.Title}</h5>
            <p class="card-text">This is a movie that came out in ${data.Year}. It has been directed by ${data.Director} and 
            is ${data.Runtime} long. The actors that are in this movie are: ${data.Actors}</p>
            <p class="card-text"><small class="text-muted">${data.Country}</small></p>
        </div>
        <button id="btn${i}">I've seen this one</button>
    </div>
</div>`
    );
}

function wastedTime(data, i) {
    document.getElementById(`btn${i}`).addEventListener("click", () => {
        let time = parseInt(data.Runtime)
        wasted.push(time);
        let totaltime = 0;
        for (let i = 0; i < wasted.length; i++) {
            totaltime += wasted[i];
        }
        console.log(totaltime);
    })
}