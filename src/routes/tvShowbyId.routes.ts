import { Request, Response, Router } from "express";
import axios, { AxiosResponse } from "axios";
import { TVShowData } from "../types/types";

const router = Router();

router.get("/tv/:id", async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }
    

    const { id } = req.params;

    const response: AxiosResponse<TVShowData> = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );

    const tvShowData: TVShowData = response.data;
    res.status(200).json(tvShowData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
