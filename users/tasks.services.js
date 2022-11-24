

const  taskControllers = require('./tasks.controllers')

//taskControllers.createUser()
//taskControllers.findAllUsers()
//taskControllers.findUserById()

const getAllUsers = (req, res) =>{
  const data = taskControllers.findAllUsers()
  res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id 
    const data = taskControllers.findUserById(id)
    if (data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthday } = req.body 
    if (first_name && last_name){
        const data = taskControllers.createUser({ first_name, last_name, email, password, birthday })
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Invalid Data'})
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    postUser
}