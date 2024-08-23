import { z } from "zod";

export const GeneratorSchema = z.object({
  chars: z.string().min(1, { message: "Минимальная длина - 1 символ" }),
  count: z.coerce.number().max(300, { message: "Максимум 300" }),
});

export type GeneratorType = z.infer<typeof GeneratorSchema>;
