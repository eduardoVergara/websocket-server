const express = require('express');
const cors = require('cors');


class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.path = {
        }

        // Middelware
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();

        //Sockets
        this.sockets();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
       
    }

    routes(){
        
    }

    sockets(){
        this.io.on('connection',socket =>{
            console.log('cliente conectado',socket.id);

            socket.on('disconnect',() =>{
                console.log('cliente desconectado');
            } )
        })
    }

    lisent(){
        this.server.listen(this.port,()=>{
            console.log('Server corriendo en el puerto '+ this.port);
        });
    }
}

module.exports = Server;