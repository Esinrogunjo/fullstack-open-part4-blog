const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const blogRouter = require("./controllers/blogs");
const logger = require("./utils/logger");

const app = express();

const mongoUrl = config.MONGODB_URI;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info("connected to mongoose"))
  .catch((e) => logger.error(e));

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.get("/", (req, res) => res.send("igbedudu"));

module.exports = app;
