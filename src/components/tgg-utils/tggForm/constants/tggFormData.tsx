"use client";

import * as z from "zod";

// TYPES
export type tggFormDataType = z.infer<typeof tggFormSchema>;

// DATA

export const tggFormSchema = z
  .object({
    name: z.string(),
    emailAddress: z.string().email(),
    recipe_title: z.string(),
    recipe_description: z.string(),
    recipe_serves: z.string(),
    recipe_prepttime: z.string(),
    recipe_cooktime: z.string(),
    recipe_totaltime: z.string(),
    recipe_ingredients: z.string(),
    recipe_directions: z.string(),
    recipe_glutenFree: z.string(),
    recipe_dairyFree: z.string(),
    recipe_sugarFree: z.string(),
    recipe_notes: z.string(),
  })
  .partial();
//SURVEY DONE
