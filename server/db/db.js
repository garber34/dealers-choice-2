const Sequelize = require('sequelize');
const database= process.env.DATABASE_URL || 'postgres://localhost:5432/games_db';
const db = new Sequelize(database,{logging:false,operatorsAlias:false});

const games = db.define('games',{

  title:{
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      notEmpty:true
    }
  },
  year:{
    type:Sequelize.INTEGER
  },
  minPlayer:{
    type: Sequelize.INTEGER
  },
  maxPlayer:{
    type:Sequelize.INTEGER
  },
  tags:{
    type:Sequelize.TEXT
  }


})

module.exports={db,games}
