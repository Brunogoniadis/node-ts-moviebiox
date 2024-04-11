import { Request, Response, Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/tv/:id', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY

    if (!apiKey) {
      throw new Error('API key not found')
    }

    console.log(req)

    const { id } = req.params

    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}`,

      {
        params: {
          api_key: apiKey,
        },
      }
    )

    res.status(200).json(response.data)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'There was an internal server error.' })
    }
  }
})

export default router
