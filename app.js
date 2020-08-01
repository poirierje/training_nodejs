const express = require( 'express' );
const path    = require ( 'path' );
const Joi     = require ( 'joi' );
const bodyParser = require ( 'body-parser' );

const app = express();

app.use( '/public', express.static( path.join( __dirname, 'static' ) ) );
app.use( bodyParser.urlencoded( { extended : false } ) );

app.use( '/example', ( req, res, next ) => {
    console.log( '1' + req.url, req.method);
    next();
});

app.get( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'static', 'index.html' ) );
})

app.post( '/', ( req, res ) => {
    console.log( req.body );

    // Joi validation
    const schema = Joi.object().keys({
        email    : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });

    console.log( "1 - " + Joi );
    console.log( "1 - " + Joi.validate );

    res.send( 'Sucessfully handled data.' );
})

app.listen( '3000' );


 