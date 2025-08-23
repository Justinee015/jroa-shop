import { ZodType } from "zod";

export interface Schemas {
  body?: ZodType;
  headers?: ZodType;
  params?: ZodType;
  query?: ZodType;
}
