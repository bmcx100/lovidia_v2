"use client";

import * as z from "zod";

// TYPES
export type SurveyFormDataType = z.infer<typeof SurveyFormSchema>;

export type TFormComponentController = {
  [key: number]: React.ElementType;
};

// DATA

export const SurveyFormSchema = z
  .object({
    name: z.string(),
    emailAddress: z.string(), //setting this to email made it be required couldn't find a good work around
    age: z.enum([
      "select",
      "under_18",
      "18_25",
      "26_35",
      "36_45",
      "46_55",
      "56_65",
      "66_70",
      "over_70",
      "not_applicable",
    ]),
    location: z.enum([
      "select",
      "United States",
      "Canada",
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Russia",
      "Netherlands",
      "Belgium",
      "Sweden",
      "Poland",
      "Switzerland",
      "Norway",
      "Austria",
      "China",
      "India",
      "Brazil",
      "South Africa",
      "Australia",
      "Other",
      "Not applicable",
    ]),
    symptomsMonth: z.enum([
      "select",
      "Not Applicable",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]),
    symptomsYear: z.enum(["select", "Not Applicable", "2020", "2021", "2022", "2023", "2024"]),
    symptomsSevere: z.string(),
    symptomsMinor: z.string(),
    symptomsComments: z.string(),
    treatmentsImpact: z.string(),
    treatmentsHelpful: z.string(),
    treatmentComments: z.string(),
    newsletter: z.boolean(),
    followup: z.boolean(),
    community: z.boolean(),
    conclusionComments: z.string(),
    isComplete: z.boolean(),
  })
  .partial();
//SURVEY DONE
