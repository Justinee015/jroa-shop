import type { RequestHandler } from "express";

import { ERROR_MESSAGE } from "#constants/ErrorMessage.const.js";
import userService from "#services/user.services.js";

export const getUsers: RequestHandler = async (_, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: ERROR_MESSAGE.ERR_DB_GET_ALL_USER,
      status: 500,
    });
    next(error);
  }
};

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createdUser = await userService.createUser(req);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: ERROR_MESSAGE.ERR_DB_CREATE_USER,
      status: 500,
    });
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: ERROR_MESSAGE.ERR_DB_UPDATE_USER,
      status: 500,
    });
    next(error);
  }
};
