import userController from "#controllers/user.controllers.js";
import validate from "#middlewares/validate.middleware.js";
import createUserRequestModel from "#models/createUserRequest.model.js";
import getSpecificUserRequestModel from "#models/getSpecificUserRequest.model.js";
import updateUserRequestModel from "#models/updateUserRequest.model.js";
import { Router } from "express";

const router = Router();

router.get("/", userController.getUsers);
router.get(
  "/:id",
  validate.validateParams(getSpecificUserRequestModel),
  userController.getSpecificUser
);
router.post(
  "/create",
  validate.validateBody(createUserRequestModel),
  userController.createUser
);
router.patch(
  "/update/:id",
  validate.validateParams(updateUserRequestModel),
  userController.updateUser
);

router.patch("/archive/:id", userController.archiveUser);
router.delete("/delete/:id", userController.deletedUser);

export default router;
