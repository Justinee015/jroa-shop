import type { NextFunction, Request, Response } from "express";

import { ZodError, ZodType } from "zod";

const validateBody =
  (schemas: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = schemas.parse(req.body);
      req.body = validatedBody;
      console.log("validate body");
      next();
    } catch (err) {
      console.log(err);
      if (err instanceof ZodError) {
        return res
          .status(400)
          .json({ error: true, message: "Invalid user request", status: 400 });
      }

      next(err);
    }
  };
const validateParams =
  (schemas: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedParams = schemas.parse(req.params);
      Object.assign(req.params, validatedParams);

      if (req.body && Object.keys(req.body as object).length > 0) {
        const validatedBody = schemas.parse(req.body);
        req.body = validatedBody;
      }

      next();
    } catch (err) {
      console.log(err);
      if (err instanceof ZodError) {
        return res
          .status(400)
          .json({ error: true, message: "Invalid user request", status: 400 });
      }

      next(err);
    }
  };

const validate = {
  validateBody,
  validateParams,
};

export default validate;
