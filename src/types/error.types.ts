import type {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";

export interface AppError
  extends Error,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError {
  code: string;
  isOperational?: boolean;
  meta?: Record<string, unknown>;
  status?: number;
  statusCode?: number;
}
