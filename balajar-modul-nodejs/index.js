// impor momentjs
var moment = require('moment');
var marqo = require('./marqo');
var http = require('http');

// Menggunakan modul momentjs
console.log('Sekarang : ' + moment().format('D MMMM YYYY, h:mm:ss a'));
console.log(marqo.salamMarqo());
console.log("jala http " + http);