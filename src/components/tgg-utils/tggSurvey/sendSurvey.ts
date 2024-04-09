"use server";

import { SurveyFormSchema, SurveyFormDataType } from "./surveyData";
import React from "react";
import { Resend } from "resend";
import * as z from "zod";
import sendSurveyMessage from "./sendSurveyMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendSurvey = async (formData: SurveyFormDataType) => {
  const subjectContent = `Survey Submission from ${formData.name} ${formData.emailAddress}`;

  console.log("Running sendSurveyUs.ts");
  console.log(formData);

  resend.emails.send({
    from: "Lovidia Survey <onboarding@resend.dev>",
    to: "ryan@thegrooveguides.com",
    subject: subjectContent,
    react: React.createElement(sendSurveyMessage, { formData }),
  });
};
