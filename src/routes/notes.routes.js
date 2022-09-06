const { Router } = require('express') // Chamando o Router da biblioteca express

const NotesController = require('../controllers/NotesController') //importando

const notesRoutes = Router() //Variável para inicializar o ROUTER

const notesController = new NotesController()

notesRoutes.get('/', notesController.index)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes // Expondo rotas para o server.js
