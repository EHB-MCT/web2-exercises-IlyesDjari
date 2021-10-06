"use strict";

window.onload = () => {
    console.log("The page has been loaded succesfully");
    listen();

};

function listen() {
    document.getElementById('submitme').addEventListener("submit", function (event) {
        event.preventDefault(), alert('You sucessfully submited the form !');
        let name = document.getElementById('nameinput').value;
        let email = document.getElementById('emailinput').value;
        let order = document.getElementById('orderinput').value;
        let orderDetails = {
            name,
            email,
            order
        }
        document.getElementById('messages').innerHTML = printOrder(orderDetails);
    });

};