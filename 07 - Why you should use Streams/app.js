const fs = require( 'fs' );

const rs = fs.createReadStream( 'largeTextFile.txt' );

rs.on( 'data', ( chunk ) => {
    process.stdout.write( '.' );
});

setTimeout(
    () => 
    { 
        console.log ('***'); 
        setTimeout(
            () => 
            { 
                console.log ('***'); 
                setTimeout(
                    () => 
                    { 
                        console.log ('***'); 
                    },
                    250
                );
            },
            250
        );
    },
    250
);
