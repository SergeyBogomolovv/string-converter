import { z } from "zod";

export const ReplaceFormSchema = z.object({
  replace: z.optional(z.string()),
  wordsToReplace: z.optional(z.string()),
});

export type ReplaceForm = z.infer<typeof ReplaceFormSchema>;
