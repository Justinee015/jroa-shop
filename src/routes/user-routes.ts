import {
  createUser,
  getUsers,
  updateUser,
} from "#controllers/user.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.post("/create", createUser);
router.patch("/update", updateUser);

export default router;
