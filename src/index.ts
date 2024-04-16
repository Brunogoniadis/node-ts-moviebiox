import express from "express";
import dotenv from "dotenv";

dotenv.config();

import tvRouter from "./routes/tv.routes";

import movieById from "./routes/movieById.routes";

import moviesCategories from "./routes/moviesCategories.routes";

import moviesOfCategories from "./routes/moviesOfCategories.routes";

import moviesRelacioned from "./routes/moviesRelacioned.routes";

import moviesSearch from "./routes/moviesSearch.routes";

import tvShowById from "./routes/tvShowbyId.routes"

const app = express();
const port = 3000;

app.use("/api", movieById);

app.use("/api", tvRouter);

app.use("/api", moviesCategories);

app.use("/api", moviesOfCategories);

app.use("/api", moviesRelacioned);

app.use("/api", moviesSearch);

app.use("/api", tvShowById);


app.listen(port, () => {
  console.log(`Server is up!!!`);
});
