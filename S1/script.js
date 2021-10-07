"use strict";

window.onload = () => {
    console.log("The page has been loaded succesfully");

    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: '12€'
    }, {
        id: '2',
        name: 'Ceasar salad',
        price: '10€'
    }, {
        id: '3',
        name: 'Milkshake',
        price: '5€'
    });

    dishes.forEach(dishes =>
        document.getElementById('menu').insertAdjacentHTML('beforeend', `
        <div>
                <input id="${dishes.id}" name="order" type="radio" value="${dishes.name}" checked>
                <label for="${dishes.id}">${dishes.name} ${dishes.price}</label>
            </div>
        `));
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
        if (orderDetails.name != '' & orderDetails.email != '' & orderDetails.order != '') {
            printOrder(orderDetails)
        } else {
            document.getElementById('messages').innerHTML = 'Please fill all details to place your order'
        }

    });
};

function printOrder(orderDetails) {
    document.getElementById('messages').innerHTML =
        `The order for the customer ${orderDetails.name} is the following: ${orderDetails.order}.
         The customer may be notified by email: ${orderDetails.email}`;
}