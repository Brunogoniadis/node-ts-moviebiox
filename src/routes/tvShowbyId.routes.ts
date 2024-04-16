import { Request, Response, Router } from "express";
import axios from "axios";
import { TVShowData } from "../types/types";

const router = Router();

router.get("/tv/:tvShowId", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const { tvShowId } = req.params;

    const apiUrl = `https://api.themoviedb.org/3/tv/${tvShowId}`;

    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });

    const tvShowData: TVShowData = response.data;
    res.status(200).json(tvShowData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
