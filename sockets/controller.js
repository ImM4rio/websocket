

const socketController = ( socket ) => {
        
    console.log( 'Cliente conectado ', socket.id );

        socket.on( 'disconnect', () => {
            console.log( 'Cliente desconectado', socket.id );
        });

        socket.on( 'enviar-mensaje', ( payload, callback ) => {

            const id = 123456;
            callback( id );
            
            // Envío a todos desde el servidor menos el que dispara el evento
            socket.broadcast.emit( 'enviar-mensaje', payload );
        });
}

module.exports = {
    socketController
}