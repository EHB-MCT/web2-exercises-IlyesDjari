"use strict";

import Cleave from 'cleave.js';

console.log("test");

var Cleave = require('cleave.js');
require('cleave.js/dist/addons/cleave-phone.be.js');


new Cleave('.input-name', {
    prefix: 'STUDENT-'
});

new Cleave('.input-birthdate', {
    date: true,
    datePattern: ['Y', 'm', 'd']
});

new Cleave('.input-rrn', {
    numeral: true,
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.', '.', '.', '-', '.']
});

new Cleave('.input-age', {
    numeral: true,
    numeralPositiveOnly: true
});

new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'BE'
});