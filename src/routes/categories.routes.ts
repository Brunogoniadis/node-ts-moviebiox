import express, { Request, Response } from "express";
const router = express.Router();

import dotenv from "dotenv";
dotenv.config();

router.get("/categories", (req: Request, res: Response) => {
  const apiKey = process.env.API_KEY;

  res.status(200).send(`Get Ok!`);
});

export default router;
