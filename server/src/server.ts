import express from 'express'

const app = express()

app.get('/users', (req, res)=> {
  console.log("listagem de usuários")
  return res.json([
    'Diego',
    'Cleiton',
    'Robson'
  ])
})

app.listen('3333')