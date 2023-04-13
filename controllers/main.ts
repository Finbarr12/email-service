import { Request, Response } from "express";
import * as nodemailer from "nodemailer";
import sendInBlueTransport from "nodemailer-sendinblue-transport";
import { EnvironmentVariables } from "../config/environs";

export const Mailer = (req: Request, res: Response) => {
  const { email, messages, subject } = req.body;
  try {
    const transporter = nodemailer.createTransport(
      new sendInBlueTransport({
        apiKey: EnvironmentVariables.sendInBlueKey,
      })
    );

    const message = {
      from: email,
      to: "okonkwovincent63@gmail.com",
      subject: subject,
      text: messages,
    };

    transporter.sendMail(
      message,
      function (error: Error | null, info: nodemailer.SentMessageInfo) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );

    return res.status(200).json({
      message: "successful",
    });
  } catch (error: any) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};
