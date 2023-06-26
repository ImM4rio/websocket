const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io = require('socket.io')( this.server );
        
        this.paths = {}

        // Middlewares: función que va a ejecutarse cuando levantemos nuestro servidor
        this.middlewares();

        // Rutas de mi aplicación.
        this.routes();

        this.sockets();
    
    }

    middlewares () {
        
        // CORS
        this.app.use( cors() );

        // Directorio público
        this.app.use( express.static('public') );

    }

    routes () {
       
    }

    sockets () {

        this.io.on( 'connection', socket => {
            console.log( 'Cliente conectado ', socket.id );

            socket.on( 'disconnect', () => {
                console.log( 'Cliente desconectado', socket.id );
            });

        });
    }

    listen () {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;