import Router from "express";
import { Mailer } from "../controllers/main";

const router = Router();

router.post("/mailer", Mailer);

export default router;
