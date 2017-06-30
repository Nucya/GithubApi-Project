var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json());

app.config(function($routeProvider) {
  $routeProvider.when('/:userName', {
    templateUrl:"index.html"
  })
  .otherwise({
    redirectTo: '/Nucya'
  })
}

app.listen( port, function() {
  console.log( `server port: ${ port }` );
});
