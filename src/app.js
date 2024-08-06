
    // Funcion agnostica autoconvocada
    // Agnostica por que no tiene nombre
    // Autoconvocada porque la ejecutamos con los parentesis

    const {envs} = require('./config/env')
    const { startServer} = require('./server/server')

    const main = () =>{
        startServer({
            port : envs.PORT,
            public_path: envs.public_path
        })
    }

    (async() =>{
        main()
    }
    ) ()

