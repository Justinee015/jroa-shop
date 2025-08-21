import { getUsers } from "#controllers/user.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);

export default router;
