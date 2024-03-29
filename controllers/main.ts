import { Request, Response } from "express";
import * as nodemailer from "nodemailer";
import sendInBlueTransport from "nodemailer-sendinblue-transport";
import { EnvironmentVariables } from "../config/environs";
import sgMail from "@sendgrid/mail";
import { google } from "googleapis";

const GOOGLE_ID =
  "1077811658485-8g4oaik299dr0m2mk0pj17ojt885t5tn.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";
const GOOGLE_REFRESHTOKEN =
  "1//04Ub7et3W2PZ1CgYIARAAGAQSNwF-L9IrWC5IbvJUy0z7spBG5TjsIk0d8wWO-FF0AzTpHaw3HDwq2Br3bWeBvKrr38gWkTNPKrc";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);
oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });

// sgMail.setApiKey(
//   "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"
// );

export const Mailer = async (req: Request, res: Response) => {
  const { email, messages, subject } = req.body;
  try {
    const getAccessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ogbonnafinbarr@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken: 
                  "ya29.a0Ael9sCOzMhnXJziY5UJIXsacuxtVk2bMrosg_mHRy6M4EOU8z49KPTyNWBOMMAjt_3vl492NBBeZzZxUWolJs7USpY6V7RtIMItTtu_70-xttS7jrLS6FZgYlUyhesUtE2tCL5R0_WEXEYTbJ-INtwD4nftjaCgYKAaMSARESFQF4udJhqsSgHm2KTNTUkx7BTwYy9g0163",
      },
    });

    const message = {
      from: email,
      to: "okonkwovincent63@gmail.com",
      subject: subject,
      html: `<h1 style = "color:red">${messages}</h1>`,
    };

    transport.sendMail(message);

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
