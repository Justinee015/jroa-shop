import z from "zod";

const createUserRequestModel = z.object({
  email: z.email(),
  name: z.string(),
  password: z.string(),
  userName: z.string(),
});

export default createUserRequestModel;
