import prisma from "#config/db.js";

const getAllUsers = async () => {
  const res = await prisma.user.findMany();
  console.log(res);
  return res;
};

const userService = {
  getAllUsers,
};

export default userService;
