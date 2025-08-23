import type { UserType } from "#types/userModel.types.js";
import type { NextFunction, Request, RequestHandler, Response } from "express";

import userService from "#services/user.services.js";

const getUsers: RequestHandler = async (
  _,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ code: 200, error: false, result: users });
  } catch (error) {
    next(error);
  }
};

const getSpecificUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const specificUser = await userService.getSpecificUser(id!);
    res.status(200).json({ code: 200, error: false, result: specificUser });
  } catch (error) {
    next(error);
  }
};

const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("create user");
    const createdUser = await userService.createUser(req.body as UserType);
    res.status(201).json({ code: 201, error: false, result: createdUser });
  } catch (error) {
    next(error);
  }
};

const updateUser: RequestHandler = async (
  req,
  res: Response,
  next: NextFunction
) => {
  try {
    const request = { id: Number(req.params.id), ...req.body };
    const updatedUser = await userService.updateUser(request as UserType);
    res.status(200).json({ code: 200, error: false, result: updatedUser });
  } catch (error) {
    next(error);
  }
};

const archiveUser: RequestHandler = async (
  req,
  res: Response,
  next: NextFunction
) => {
  try {
    const request = { id: Number(req.params.id), ...req.body };
    const updatedUser = await userService.archiveUser(request as UserType);
    res.status(200).json({ code: 200, error: false, result: updatedUser });
  } catch (error) {
    next(error);
  }
};

const deletedUser: RequestHandler = async (
  req,
  res: Response,
  next: NextFunction
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const id = req.params.id!;
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json({ code: 200, error: false, result: deletedUser });
  } catch (error) {
    next(error);
  }
};

const userController = {
  archiveUser,
  createUser,
  deletedUser,
  getSpecificUser,
  getUsers,
  updateUser,
};

export default userController;
