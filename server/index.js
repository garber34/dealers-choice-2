const express = require('express');
const path = require('path')
const app = express();
const volleyball =require('volleyball')
const {db,games} = require('./db/db')

app.use(express.json())

app.use(volleyball)

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/api/games', async (req,res,next)=> {
  try {
    const results = await games.findAll()
    res.json(results)
  } catch (error) {
    next(error)
  }

})

app.post('/api/games', async (req,res,next)=>{
  try {
    const result = await games.create(req.body)
    res.json(result)
  } catch (error) {
    next(error)
  }
})

app.get('/api/games/:gameId', async (req,res,next)=> {
  try {
    const result = await games.findByPk(req.params.gameId)
    res.json(result)
  } catch (error) {
    next(error)
  }

})

app.put('/api/games/:gameId', async (req,res,next)=>{
  try {
    await games.update(req.body,{where:{id:req.params.gameId}})
    const result = await games.findByPk(req.params.gameId)
    res.json(result)
  } catch (error) {
    next(error)
  }
})

app.delete('/api/games/:gameId', async(req,res,next)=>{
  try {
    await games.destroy({where:{id:req.params.gameId}})
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

app.use((req,res,next)=>{
  res.redirect('/')
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log("Running on port",PORT))
