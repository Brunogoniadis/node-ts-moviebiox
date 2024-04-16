import { Request, Response, Router } from "express";
import axios from "axios";
import { IMovie } from "../types/types";

const router = Router();

router.get("/movies/search", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const { term } = req.query;

    const apiUrl = `https://api.themoviedb.org/3/search/movie`;

    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
        query: term,
        page: 1,
      },
    });

    const movies: IMovie[] = response.data.results.slice(0, 10);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
