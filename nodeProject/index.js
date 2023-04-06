import express from 'express'
import bodyParser from 'body-parser'

import  productRouter  from './routes/product.js'

// On crée une application express
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/product', productRouter)

// CRUD = Create, Read, Update, Delete


// On peut avoir plusieurs middleware
app.use((req, res, next) => {
  console.log('Je suis dans le middleware')
  // On appelle le prochain middleware
  next()
})

app.use((req, res, next) => {
  res.status(200)
  next()
})

app.use((req, res, next) => {
  res.status(200)
  res.send('Hello ESGI')
  next()
})

app.listen(3000)
