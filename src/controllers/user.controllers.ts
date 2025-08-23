import type { RequestHandler } from "express";

import userService from "#services/user.services.js";

export const getUsers: RequestHandler = async (_, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createdUser = await userService.createUser(req);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
