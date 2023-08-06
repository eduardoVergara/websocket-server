const socketController = (cliente) => {
  console.log("cliente conectado", cliente.id);

  cliente.on("disconnect", () => {
    console.log('cliente desconectado', cliente.id);
  });

  cliente.on("enviar_mensaje", (payload, callback) => {
      const id = 1123456789;
      callback(id);
      cliente.broadcast.emit('enviar_mensaje',payload);
  });
};

module.exports = {
  socketController,
};
