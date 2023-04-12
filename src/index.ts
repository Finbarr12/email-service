import express, { Application } from "express";
import router from "../router/router";

const app: Application = express();
const Port = 1212;

app.use(express.json());

app.use("/api", router);

app.listen(Port, () => {
  console.log("Up and running");
});
