import { Request, Response, Router } from "express";
import axios, { AxiosResponse } from "axios";
import { IGenre } from "../types/types";

const router = Router();

router.get("/tvgenres/", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const response: AxiosResponse<{ genres: IGenre[] }> = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );

    const categories: IGenre[] = response.data.genres;

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
