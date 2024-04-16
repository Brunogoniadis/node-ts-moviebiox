import express from "express";
import dotenv from "dotenv";

import cors from "cors";

dotenv.config();

import movieById from "./routes/movieById.routes";
import moviesCategories from "./routes/moviesCategories.routes";
import moviesOfCategories from "./routes/moviesOfCategories.routes";
import moviesRelacioned from "./routes/moviesRelacioned.routes";
import moviesSearch from "./routes/moviesSearch.routes";
import tvShowById from "./routes/tvShowbyId.routes";
import tvShowsCategories from "./routes/tvShowCategories.routes";
import tvShowOfCategory from "./routes/tvShowOfCategory.routes";
import tvShowRelacioned from "./routes/tvShowRelacioned.routes";
import tvShowsSearch from "./routes/tvShowsSearch.routes";

const app = express();
const port = 3000;
app.use(cors());

app.use("/api", movieById);
app.use("/api", moviesCategories);
app.use("/api", moviesOfCategories);
app.use("/api", moviesRelacioned);
app.use("/api", moviesSearch);

app.use("/api", tvShowById);
app.use("/api", tvShowsCategories);
app.use("/api", tvShowOfCategory);
app.use("/api", tvShowRelacioned);
app.use("/api", tvShowsSearch);

app.listen(port, () => {
  console.log(`Server is up!!!`);
});
