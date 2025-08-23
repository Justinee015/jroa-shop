import z from "zod";

const getSpecificUserRequestModel = z.object({
  id: z.string(),
});

export default getSpecificUserRequestModel;
