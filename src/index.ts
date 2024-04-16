import express from "express";
import dotenv from "dotenv";

dotenv.config();

import tvRouter from "./routes/tv.routes";

import movieById from "./routes/movieById.routes";

import moviesCategories from "./routes/moviesCategories.routes";

import moviesOfCategories from "./routes/moviesOfCategories.routes";

const app = express();
const port = 3000;

app.use("/api", movieById);

app.use("/api", tvRouter);

app.use("/api", moviesCategories);

app.use("/api", moviesOfCategories);

app.listen(port, () => {
  console.log(`Server is up!!!`);
});
