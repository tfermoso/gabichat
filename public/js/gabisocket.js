const socket = io();

socket.on('userlist', (onlineUsers) => {
    console.log(onlineUsers);
})