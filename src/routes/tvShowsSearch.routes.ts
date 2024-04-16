import { Request, Response, Router } from "express";
import axios from "axios";
import { ITvShow } from "../types/types";

const router = Router();

router.get("/tvshows/search", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const { term } = req.query;

    if (!term) {
      throw new Error("Search term is required");
    }

    const apiUrl = `https://api.themoviedb.org/3/search/tv`;

    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
        query: term,
        page: 1,
      },
    });

    const tvShows: ITvShow[] = response.data.results.slice(0, 10);
    res.status(200).json(tvShows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
