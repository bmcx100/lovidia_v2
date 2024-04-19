import mongoose, { Schema } from "mongoose";

const VAR_MONGODB_URI = process.env.MONGODB_URI as string;

mongoose.connect(VAR_MONGODB_URI);
mongoose.Promise = global.Promise;

const surveySchema = new Schema(
  {
    name: String,
    emailAddress: String,
    age: String,
    location: String,
    symptomsMonth: String,
    symptomsYear: String,
    symptomsSevere: String,
    symptomsMinor: String,
    symptomsComments: String,
    treatmentsImpact: String,
    treatmentsHelpful: String,
    treatmentComments: String,
    newsletter: Boolean,
    followup: Boolean,
    community: Boolean,
    conclusionComments: String,
  },
  { timestamps: true },
);

const Survey = mongoose.models.Survey || mongoose.model("Survey", surveySchema);
export default Survey;
