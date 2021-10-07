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
        console.log(orderDetails);
        document.getElementById('messages').innerHTML =
            `The order for the customer ${orderDetails.name} is the following:  ${orderDetails.order}. The customer may be notified by email:  ${orderDetails.email}`;
    });
};