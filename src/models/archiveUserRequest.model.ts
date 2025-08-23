import z from "zod";

const archiveUserRequestModel = z.object({
  delFlg: z.string(),
});

export default archiveUserRequestModel;
