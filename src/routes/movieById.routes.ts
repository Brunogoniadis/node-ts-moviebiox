import { Request, Response, Router } from "express";
import axios, { AxiosResponse } from "axios";
import { IMovie } from "../types/types";

const router = Router();

router.get("/movie/:id", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    
    const { id } = req.params;
    console.log("teste", id);

    const response: AxiosResponse<IMovie> = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );

    const movieData: IMovie = response.data;

    res.status(200).json(movieData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "There was an internal server error." });
    }
  }
});

export default router;
