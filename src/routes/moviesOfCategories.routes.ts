import { Request, Response, Router } from "express";
import axios from "axios";
import { IMovie } from "../types/types";

const router = Router();

router.get(
  "/movies/category/:categoryId",
  async (req: Request, res: Response) => {
    try {
      const apiKey = process.env.API_KEY;

      if (!apiKey) {
        throw new Error("API key not found");
      }

      const { categoryId } = req.params;
      console.log("genreId", req.params);
      const { page } = req.query;

      const apiUrl = `https://api.themoviedb.org/3/discover/movie`;

      const response = await axios.get(apiUrl, {
        params: {
          api_key: apiKey,
          with_genres: categoryId,
          page: page || 1,
        },
      });

      const movies: IMovie[] = response.data.results;
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
