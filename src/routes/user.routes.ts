import {
  createUser,
  getUsers,
  updateUser,
} from "#controllers/user.controllers.js";
import validate from "#middlewares/validate.middleware.js";
import createUserRequestModel from "#models/createUserRequest.model.js";
import updateUserRequestModel from "#models/updateUserRequest.model.js";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.post("/create", validate(createUserRequestModel), createUser);
router.patch("/update", validate(updateUserRequestModel), updateUser);

export default router;
