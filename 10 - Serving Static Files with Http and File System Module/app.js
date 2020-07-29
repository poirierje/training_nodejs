const http = require( 'http' );

const fs = require( 'fs' );

http.createServer( ( req, res ) => {
    const rs = fs.createReadStream( './static/index.html', 'utf8' );
    res.writeHead( 200, { 'Content-type' : 'text/html' } );
    rs.pipe( res );
}).listen( '2020' );




