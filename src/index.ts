import express, { Application } from "express";

const app: Application = express();
const Port = 1212;

app.use(express.json());

app.listen(Port, () => {
  console.log("Up and running");
});
