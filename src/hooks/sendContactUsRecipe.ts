"use server";

import { formSchemaContactUsRecipe } from "@/constants/contactUsRecipeForm";
import React from "react";
import { Resend } from "resend";
import * as z from "zod";
import contactUsRecipeMessage from "./contactUsRecipeMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactUsRecipe = async (formData: z.infer<typeof formSchemaContactUsRecipe>) => {
  console.log("Running sendContactUs.ts");
  // console.log(formData.email)
  console.log(formData);
  resend.emails.send({
    from: "Lovidia Recipe Form <mailer@lovidia.net>",
    to: "mike@lovidia.net",
    cc: "ryan@thegrooveguides.com",
    subject: "Message from contact form: " + formData.name + " - " + formData.recipe_title,
    // text: "message: " + formData.message,
    react: React.createElement(contactUsRecipeMessage, {
      name: formData.name,
      emailAddress: formData.emailAddress,
      recipe_title: formData.recipe_title,
      recipe_description: formData.recipe_description,
      recipe_serves: formData.recipe_serves,
      recipe_prepttime: formData.recipe_prepttime,
      recipe_cooktime: formData.recipe_cooktime,
      recipe_totaltime: formData.recipe_totaltime,
      recipe_ingredients: formData.recipe_ingredients,
      recipe_directions: formData.recipe_directions,
      recipe_glutenFree: formData.recipe_glutenFree,
      recipe_dairyFree: formData.recipe_dairyFree,
      recipe_sugarFree: formData.recipe_sugarFree,
      recipe_notes: formData.recipe_notes,
    }),
  });
};
