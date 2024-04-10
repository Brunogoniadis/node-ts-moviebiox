import express from 'express'

import dotenv from 'dotenv'

dotenv.config()

import categoryRouter from './routes/category.routes'

import categoriesRouter from './routes/categories.routes'

const app = express()
const port = 3000

app.use('/api', categoryRouter)

app.use('/api', categoriesRouter)

app.listen(port, () => {
  console.log(`Server is up!!!`)
})
