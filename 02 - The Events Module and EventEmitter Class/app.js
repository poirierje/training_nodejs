const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on( 'tutorial', () => {
    console.log( 'Tutorial event has occured.' );
});

eventEmitter.on( 'tutorialWithParam', ( arg ) => {
    console.log( 'Tutorial event has occured with param : ' + arg );
});

eventEmitter.emit( 'tutorial' );
eventEmitter.emit( 'tutorialWithParam', 'TOTO' );

class Person extends EventEmitter {

    constructor ( name ) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }

};

let laPoirasse = new Person( 'La Poirâsse' );
laPoirasse.on( 'name', () => {
    console.log( 'My name is ' + laPoirasse.name );
});
laPoirasse.emit( 'name' );