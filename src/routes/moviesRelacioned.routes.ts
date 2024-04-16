import { Request, Response, Router } from "express";
import axios from "axios";
import { IMovie } from "../types/types";

const router = Router();

router.get("/movies/related/:movieId", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const { movieId } = req.params;

    const apiUrl = `https://node-ts-moviebiox.vercel.app/api/movies/related/${movieId}`;

    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });

    const movies: IMovie[] = response.data.results;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
