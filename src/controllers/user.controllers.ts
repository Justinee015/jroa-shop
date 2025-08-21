import type { RequestHandler } from "express";

import prisma from "#config/db.js";

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};
