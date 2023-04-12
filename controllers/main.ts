import { Request, Response } from "express";

const Mailer = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
