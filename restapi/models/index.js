const dbConfig = require("../config/dbConfig");

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases: false,


        pool:{
            max: dbConfig.max,
            min: dbConfig.min,
            acquire: dbConfig.acquire,
            idle: dbConfig.idle
        }
    }
)

sequelize.authenticate()
.then( () =>{
    console.log("connected...")
})
.catch(err =>{
    console.log(err)
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel")(sequelize, DataTypes)
db.reviews = require("./reviewModel")(sequelize, DataTypes)


db.sequelize.sync({ force: false})
.then(() => {
    console.log(" yes re-sync done!")
})


module.exports = db;