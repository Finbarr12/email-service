import express, { Application } from "express";
import nodemailer from "nodemailer";
import sendInBlueTransport from "nodemailer-sendinblue-transport";

const app: Application = express();
const Port = 1212;

app.use(express.json());

app.listen(Port, () => {
  console.log("Up and running");
});
