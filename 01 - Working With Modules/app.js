console.log('Hello world from La Poirâsse !');

const tutorial = require('./tutorial.js');

console.log( tutorial.sum(1,1) );
console.log( tutorial.PI(2) );
console.log( tutorial.SomeMathObject );


console.log( '-------------------' );
console.log( new tutorial.SomeMathObject() );
console.log( '-------------------' );


