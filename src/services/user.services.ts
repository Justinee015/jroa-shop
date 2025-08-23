import type { Request } from "express";

import prisma from "#config/db.js";

const getAllUsers = async () => {
  const res = await prisma.user.findMany();
  console.log(res);
  return res;
};

const createUser = async (req: Request) => {
  const createdUser = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      userName: req.body.userName,
    },
  });
  return createdUser;
};

const updateUser = async (req: Request) => {
  const updatedUser = await prisma.user.update({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      userName: req.body.userName,
    },
    where: { id: req.body.id },
  });
  return updatedUser;
};

const userService = {
  createUser,
  getAllUsers,
  updateUser,
};

export default userService;
