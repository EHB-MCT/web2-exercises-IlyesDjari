"use strict";

import Cleave from 'cleave.js';

console.log("test");



var cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: '{country}'
});