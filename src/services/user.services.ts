import type { UserType } from "#types/userModel.types.js";

import prisma from "#config/db.js";

const getAllUsers = async () => {
  const res = await prisma.user.findMany();
  return res;
};

const getSpecificUser = async (id: string) => {
  const specificUser = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  return specificUser;
};

const createUser = async (user: UserType) => {
  const createdUser = await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
      userName: user.userName,
    },
  });
  return createdUser;
};

const updateUser = async (user: UserType) => {
  const updatedUser = await prisma.user.update({
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
      userName: user.userName,
    },
    where: { id: user.id },
  });
  return updatedUser;
};

const archiveUser = async (user: UserType) => {
  const archivedUser = await prisma.user.update({
    data: {
      delFlg: "1",
    },
    where: { id: user.id },
  });
  return archivedUser;
};

const deleteUser = async (id: string) => {
  const deletedUser = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return deletedUser;
};

const userService = {
  archiveUser,
  createUser,
  deleteUser,
  getAllUsers,
  getSpecificUser,
  updateUser,
};

export default userService;
