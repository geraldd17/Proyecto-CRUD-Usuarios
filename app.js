const express = require('express')

const tasksRouter = require('./users/tasks.router')

//? localhost:9000/users
//! Protocolo TCP/IP


// /users   
// i GET (Al hacer esta peticion deberas de retornar todos los usuarios)
// ii POST (Al hacer esta peticion, manejaras el req del cliente y crearas un nuevo usuario)


const port = 9000
const app = express()
app.use(express.json())



app.get('/', (req, res) => {
    res.json({
        mensaje: 'OK'
    })
})


app.use('/', tasksRouter)




// /users/id
// GET → Al hacer esta petición deberas retornar el usuario con el ID en especifico que recibes desde parametros



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})