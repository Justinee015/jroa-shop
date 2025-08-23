import type { AppError } from "#types/error.types.js";
import type { NextFunction, Request, Response } from "express";

const handleError = (
  err: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  console.error("Error Details:", {
    message: err.message,
    method: req.method,
    name: err.name,
    stack: err.stack,
    status: err.status,
    timestamp: new Date().toISOString(),
    url: req.url,
  });

  // Determine status code
  const statusCode: number = err.status ?? err.statusCode ?? 500;
  console.log("errorsss");
  // Send error response
  res.status(statusCode).json({
    error: true,
    message:
      process.env.NODE_ENV === "production"
        ? statusCode === 500
          ? "Internal Server Error"
          : err.message
        : err.message,
    status: statusCode,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};

export default handleError;
