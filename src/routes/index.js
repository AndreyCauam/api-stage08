// A função deste arquivo é reunir todas as rotas da minha aplicação

const { Router } = require('express') // Chamando o Router da biblioteca express "MAIS UMA VEZ"

const usersRouter = require('./users.routes.js') // Importando o primeiro arquivo de rota

const routes = Router()

routes.use('/users', usersRouter) // Ao invés de passar o request e response, será colocado a variável que foi criada a partir do arquivo da rota

module.exports = routes
