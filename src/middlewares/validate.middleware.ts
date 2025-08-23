import type { NextFunction, Request, Response } from "express";

import z, { ZodError } from "zod";

const validate =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const validRequest = schema.parse(req.body);
      req.body = validRequest;
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res
          .status(404)
          .json({ error: true, message: "Invalid user request", status: 400 });
      }
      console.log(err);
      next(err);
    }
  };

export default validate;
