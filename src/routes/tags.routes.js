const { Router } = require('express') // Chamando o Router da biblioteca express

const TagsController = require('../controllers/TagsController') //importando

const tagsRoutes = Router() //Variável para inicializar o ROUTER

const tagsController = new TagsController()

tagsRoutes.get('/:user_id', tagsController.index)

module.exports = tagsRoutes // Expondo rotas para o server.js
