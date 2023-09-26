const Router = require("express").Router()

const {getAll,getOne,add,updated,deleted}= require('../controllers/user.controller')

Router.get('/getAll', getAll)
Router.get('/:id', getOne)
Router.post('/add', add)
Router.put('/:id', updated)
Router.delete('/:id', deleted)

module.exports= Router