const Router = require("express").Router()

const {getAll,getOne,add,updated,deleted}= require('../controllers/post.controller')

Router.get('/getAll', getAll)
Router.get('/:author', getOne)
Router.post('/add', add)
Router.put('/:id', updated)
Router.delete('/:id', deleted)

module.exports= Router