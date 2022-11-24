const router = require('express').Router()


const taskServices = require('./tasks.services')

router.get('/users', taskServices.getAllUsers)
router.get('/users/:id', taskServices.getUserById)
router.post('/users', taskServices.postUser)

module.exports = router

