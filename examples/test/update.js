var formarble = require('../../');
var schema = require('./test.schema.js');

var form = formarble.create(schema.schema);
formarble.ui(form);

console.log('window.schema =', JSON.stringify(form, null, '   '));