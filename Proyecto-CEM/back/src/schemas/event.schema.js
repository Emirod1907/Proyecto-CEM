import { string, z } from "zod";

export const createEventschema = z.object({
  title: z.string({
    required_error: "Title is required"
}),
description: z.string({
    required_error: "Description must be a string"
}),
date: z.string().datetime().optional(),

})

    