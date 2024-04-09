import express from "express";

import dotenv from "dotenv";

dotenv.config();

import categoriesRouter from "./routes/categories.routes";

const app = express();
const port = 3000;

app.use("/api", categoriesRouter);

app.listen(port, () => {
  console.log(`Server is up!!!`);
});
