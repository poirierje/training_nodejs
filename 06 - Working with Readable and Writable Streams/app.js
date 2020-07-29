const fs = require( 'fs' );

const rs = fs.createReadStream( './example.txt' );
const ws = fs.createWriteStream( './example2.txt' );

rs.on( 'data', ( chunk ) => {
    ws.write( chunk );
});

