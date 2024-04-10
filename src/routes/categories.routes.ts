import axios, { AxiosResponse } from 'axios'
import express, { Request, Response, Router } from 'express'

interface Genre {
  id: number
  name: string
}

const router: Router = express.Router()

router.get('/categories', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY

    if (!apiKey) {
      throw new Error('API key not found')
    }

      const response: AxiosResponse<{ genres: Genre[] }> = await
          axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: apiKey,
      },
    })

    const categories: string[] = response.data.genres.map(
      (genre: Genre) => genre.name
    )

    res.status(200).json(categories)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'There was an internal server error.' })
    }
  }
})

export default router
