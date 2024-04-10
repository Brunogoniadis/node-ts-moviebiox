import express from 'express'

import dotenv from 'dotenv'

dotenv.config()

import categoryRouter from './routes/category.routes'

const app = express()
const port = 3000

app.use('/api', categoryRouter)

app.listen(port, () => {
  console.log(`Server is up!!!`)
})
