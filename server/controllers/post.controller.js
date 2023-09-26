const db = require('../models/index')

module.exports={
    getAll: async (req,res)=>{
        try {
            const getAll=await db.post.findAll({})
            res.json(getAll)
        } catch (error) {
            throw error
        }
    },
    getOne:  async (req,res)=>{
        try {
            const onePost= await db.post.findOne({where:{id:req.params.id}})
            res.json(onePost)
        } catch (error) {
            throw error
        }
    },
    add:  async (req,res)=>{
        try {
            const add = await db.post.create(req.body)
            res.json(add)
        } catch (error) {
            throw error
        }
    },
    updated:  async (req,res)=>{
        try {
            const updated = await db.post.update(req.body,{where:{id:req.params.id}})
            res.json(updated)
        } catch (error) {
            throw error
        }
    },
    deleted:  async (req,res)=>{
        try {
            const deleted = await db.post.destroy({where:{id:req.params.id}})
            res.json(deleted)
        } catch (error) {
            throw error
        }
    }
}