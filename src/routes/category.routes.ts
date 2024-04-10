import axios from 'axios'
import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/category', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY

    if (!apiKey) {
      throw new Error('API key not found')
    }

    const { category } = req.query

    const { page } = req.query

    if (!category) {
      throw new Error('Category not provided')
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/${category}`,
      {
        params: {
          api_key: apiKey,
          page: page,
        },
      }
    )

    res.status(200).json(response.data)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'There was an internal server error.'})
    }
  }
})

export default router
