"use strict";

window.onload = () => {
    console.log("The page has been loaded succesfully");

    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: '12'
    }, {
        id: '2',
        name: 'Ceasar salad',
        price: '10'
    }, {
        id: '3',
        name: 'Milkshake',
        price: '5'
    });




    listen();
};

function listen() {
    document.getElementById('submitme').addEventListener("submit", function (event) {
        event.preventDefault(), alert('You sucessfully submited the form !');
        let name = document.getElementById('nameinput').value;
        let email = document.getElementById('emailinput').value;
        let order = document.querySelector('input[name=order]:checked').value
        let orderDetails = {
            name,
            email,
            order
        }
        console.log(orderDetails);
        document.getElementById('messages').innerHTML =
            `The order for the customer ${orderDetails.name} is the following:  ${orderDetails.order}. The customer may be notified by email:  ${orderDetails.email}`;

    });
};