import { Request, Response } from "express";
import nodemailer from "nodemailer";
import sendInBlueTransport from "nodemailer-sendinblue-transport";

const Mailer = (req: Request, res: Response) => {
  try {
    const transporter = nodemailer.createTransport(
      sendInBlueTransport({
        apiKey:
          "xsmtpsib-781c361ba9e1ae405ecb50b406d6ac14c11df5cc24be3826344bb372d05bb638-ZS5QIh0WXYLxU2yP",
      })
    );
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
