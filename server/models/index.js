const {Sequelize, DataTypes} = require("sequelize")

const connection = new Sequelize('blog','root','root',{
    host:'localhost',
    dialect:'mysql'
});

connection.authenticate()
.then(()=>console.log('db connected'))
.catch((error)=>console.log(error))

const post = require('./post.model')(connection,DataTypes)
const User = require('./user.model')(connection,DataTypes)
const Comment = require('./comments.model')(connection,DataTypes)

User.hasMany(post)
post.belongsTo(User)
User.hasMany(Comment)
Comment.belongsTo(User)


const db={}
db.post=post
db.User=User
db.Comment=Comment
db.connection=connection


// connection.sync({force:true})
// .then(()=>console.log('your tables are created'))
// .catch((error)=>console.error(`please check an ${error} has occured`))



module.exports = db