window.onload = () => {
    let number = Math.floor(Math.random() * 21);
    listen(number);
}

function listen(number) {
    console.log('This is the generated number', number);
    document.getElementById('submitme').addEventListener("submit",
        function (e) {
            e.preventDefault();
            let guessed = document.getElementById('yourInput').value;
            if (guessed > 0 && guessed < 21) {
                check(number, guessed);
            } else {
                document.getElementById('msg').innerHTML = `That is not a valid number (Error)`
            }
        })
}

function check(number, guessed) {
    if (guessed > number) {
        document.getElementById('msg').innerHTML = `The mystery number is lower. Guess again!`
    } else if (guessed < number) {
        document.getElementById('msg').innerHTML = `The mystery number is higher. Guess again!`
    } else if (guessed == number) {
        document.getElementById('msg').innerHTML = `You have guessed the mystery number!`
    }
}