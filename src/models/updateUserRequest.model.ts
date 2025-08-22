import z from "zod";

const updateUserRequestModel = z.object({
  email: z.email().optional(),
  id: z.number(),
  name: z.string().optional(),
  password: z.string().optional(),
  userName: z.string().optional(),
});

export default updateUserRequestModel;
