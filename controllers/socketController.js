let onlineUsers = [];

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');
        const {id,username}=socket.request.session.user;
        onlineUsers.push({id, username, socket: socket.id});
        io.emit('userlist', onlineUsers);

        socket.on('disconnect', () => {
            console.log("Se ha desconectado un cliente");
        });
    });
};
