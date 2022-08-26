const { Router } = require('express') // Chamando o Router da biblioteca express

const UsersController = require('../controllers/UsersController') //importando

const usersRoutes = Router() //Variável para inicializar o ROUTER

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes // Expondo rotas para o server.js
