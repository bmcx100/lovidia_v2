import * as z from "zod";

export const SurveyFormSchema = z.object({
  name: z.string(),
  emailAddress: z.string().email(),
  age: z.enum(["Not Applicable", "Under 18", "18-25", "26-35", "36-45", "46-55", "56-65", "66-70", "Over 70"]),
  location: z.enum([
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
  month: z.enum([
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
  year: z.enum(["Not Applicable", "2020", "2021", "2022", "2023", "2024"]),
  severe: z.string(),
  minor: z.string(),
  impact: z.string(),
  affects: z.string(),
  managing: z.string(),
  impactComments: z.string(),
  received: z.string(),
  additional: z.string(),
  supportComments: z.string(),
  suggestions: z.string(),
  topics: z.string(),
  feedbackComments: z.string(),
  newsletter: z.boolean(),
  followup: z.boolean(),
  community: z.boolean(),
  conclusionComments: z.string(),
});
//SURVEY DONE

export const PersonalInfoFormSchema = z.object({
  name: z.string(),
  emailAddress: z.string().email(),
  age: z.enum(["Not Applicable", "Under 18", "18-25", "26-35", "36-45", "46-55", "56-65", "66-70", "Over 70"]),
  location: z.enum([
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
});

// When did you first notice your Long COVID symptoms?
// What symptoms have had a severe affect on your daily life?
// What other symptoms have you been experiencing?
// Anything you'd like to share about your symptoms?

export const LongCovidFormSchema = z.object({
  month: z.enum([
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
  year: z.enum(["Not Applicable", "2020", "2021", "2022", "2023", "2024"]),
  severe: z.string(),
  minor: z.string(),
  impact: z.string(),
});

export const TreatmentsFormSchema = z.object({
  treatments: z.string(),

  management: z.string(),
  treatmentComments: z.string(),
});

// List any medications or therapies you have used to manage Long COVID symptoms.
// Use this section to list additonal treatments or information on the above, side effects, impact on your daily life, etc.
// "Aside from medical treatments, what actions or lifestyle changes have you found helpful in managing your Long COVID symptoms?"
// Contact_Form_Impact

export const ImpactFormSchema = z.object({
  affects: z.string(),
  managing: z.string(),
  impactComments: z.string(),
});

// How has Long COVID affected your daily activities, work, and relationships
// Specific challenges faced in managing Long Covid

export const SupportSchema = z.object({
  received: z.string(),
  additional: z.string(),
  supportComments: z.string(),
});

export const FeedbackSchema = z.object({
  suggestions: z.string(),
  topics: z.string(),
  feedbackComments: z.string(),
});
// Suggestions for the website (content, features, resources)
// Topics or questions they would like more information about

export const ConclusionSchema = z.object({
  newsletter: z.boolean(),
  followup: z.boolean(),
  community: z.boolean(),
  conclusionComments: z.string(),
});
