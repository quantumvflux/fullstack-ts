import { Router } from "express";
import { getData } from "./users.controller";

const router = Router();

router.route("/").get(getData);

export default router;
