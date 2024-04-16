import { Request, Response, Router } from "express";
import axios from "axios";
import { ITvShow } from "../types/types";

const router = Router();

router.get("/tv/category/:genreId", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const { genreId } = req.params;
    const { page } = req.query;

    const apiUrl = `https://node-ts-moviebiox.vercel.app/api/tv/category`;

    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
        with_genres: genreId,
        page: page || 1,
      },
    });

    const tvShows: ITvShow[] = response.data.results;
    res.status(200).json(tvShows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
