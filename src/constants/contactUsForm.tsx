import * as z from "zod";

export const formSchemaContactUs = z.object({
  topic: z.enum(["select", "share", "suggestion", "recipe", "other"]),
  emailAddress: z.string().email(),
  name: z.string(),
  message: z.string(),
});
