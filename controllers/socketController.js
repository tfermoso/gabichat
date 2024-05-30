const { User, Message, Chat } = require('../models/Associations');
let availableUsers= [];




module.exports = (io) => {
    console.log('Controlador de sockets inicializado');

    io.on('connection', async (socket) => {
        console.log('Nuevo cliente conectado');
        const{id, username, email, password, profile_picture, status, last_seen}= socket.request.session.user;
        availableUsers.push({id, username, email, password, profile_picture,status, last_seen,socketId: socket.id})
        io.emit("availableUsers", availableUsers);

        socket.on("newChat", async (data) => {
            try {
                console.log(data);
                const user = socket.request.session.user.id;
                const chat = await Chat.create();

                const newMessage = await Message.create({
                    content: data.message,
                    sender_id: user,
                    chat_id: chat.id
                });
        
                await chat.addUsers([data.iduser, user]);
        
                console.log('¡Todo correcto!');
            } catch (error) {
                console.error('Error al crear el chat o el mensaje:', error);
            }
        });
        

        socket.on("sendMensaje",async({content, sender_id, chat_id})=>{
            const newMensagge = await Message.create({
                content, sender_id, chat_id
            });
            io.to(chatId).emit("new Message", newMensagge);
        });

        socket.on('disconnect', () => {
            console.log("Se ha desconectado un cliente");
        });
    });
};


