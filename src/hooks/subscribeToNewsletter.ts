"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const subscribeToNewsletter = async (email: string) => {
  console.log("Running sendEmail.ts");
  // console.log(formData.email)

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ryan@thegrooveguides.com",
    subject: "Message from contact form",
    text: email + " has just subscribed to the email newsletter.",
  });
};
