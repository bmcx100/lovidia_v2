"use server";

import { formSchemaContactUs } from "@/constants/contactUsForm";
import React from "react";
import { Resend } from "resend";
import * as z from "zod";
import contactUsMessage from "./contactUsMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactUs = async (formData: z.infer<typeof formSchemaContactUs>) => {
  console.log("Running sendContactUs.ts");
  // console.log(formData.email)
  console.log(formData);
  resend.emails.send({
    from: "Lovidia Contact Form <onboarding@resend.dev>",
    to: "ryan@thegrooveguides.com",
    subject: "Message from contact form: " + formData.topic,
    // text: "message: " + formData.message,
    react: React.createElement(contactUsMessage, {
      topic: formData.topic,
      emailAddress: formData.emailAddress,
      name: formData.name,
      message: formData.message,
    }),
  });
};
