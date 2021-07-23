import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import usersRoutes from "../src/routes/RequestVipClient";
var boom = require("express-boom");

mongoose
  .connect(process.env["API_CONNECTION"] ?? "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Conectado a la Base de Datos"))
  .catch((error) => console.log(error));

const app = express();
app.use(boom());
app.use(cors());

if ((process.env["API_DEV_RUN"] ?? 0) == 1) {
  app.use(morgan("dev"));
}
app.use(express.json());

//Acceso publico
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/user", usersRoutes);

app.get("*", (req, res) => {
  res.boom.notFound("API INVALIDA", {
    query: req.query,
  });
});

module.exports = app;
