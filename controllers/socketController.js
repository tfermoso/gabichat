module.exports = (io) => {
    console.log('Controlador de sockets inicializado');

    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');

        socket.on('disconnect', () => {
            console.log("Se ha desconectado un cliente");
        });
    });
};
