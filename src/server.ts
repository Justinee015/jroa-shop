import type { PrismaClientInitializationError } from "@prisma/client/runtime/library";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dbConnect = async () => {
  try {
    await prisma.$connect();
    console.log("[DATABASE]: Connected to PostgreSQL (Docker)");
  } catch (error) {
    console.error(
      "[DATABASE ERROR]: Failed to connect",
      (error as PrismaClientInitializationError).message
    );
  }
};

export default dbConnect;
