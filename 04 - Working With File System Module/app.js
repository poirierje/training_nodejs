const fs = require( 'fs' );

fs.writeFile( 'example.txt', 'This is an example.', ( err ) => {
    if (err)
    {
        console.log( 'Something goes wrong when writing : ' + err );
    }
    else
    {
        console.log( 'File created, with following content :' );
        fs.readFile( 'example.txt', 'utf8', ( err, data ) => {
            if ( err )
            {
                console.log( 'Something goes wrong when reading : ' + err );
            }
            else
            {
                console.log( data );
            }
        } )
    }
});

fs.rename( 'example.txt', 'exemple.txt', ( err ) => {
    if ( err )
    {
        console.log( err );
    }
    else
    {
        console.log( 'Done rename.' );
    }
});

fs.appendFile( 'exemple.txt', ' A very simple example.', ( err ) => {
    if ( err )
    {
        console.log( err );
    }
    else
    {
        console.log( 'Done append.' );
    }
});

fs.readFile( 'exemple.txt', 'utf8', ( err, data ) => {
    if ( err )
    {
        console.log( err );
    }
    else
    {
        console.log( 'Content : ' + data );
    }
});

fs.unlink( 'exemple.txt', ( err ) => {
    if ( err )
    {
        console.log( err );
    }
    else
    {
        console.log( 'File succesfully deleted.' );
    }
});

