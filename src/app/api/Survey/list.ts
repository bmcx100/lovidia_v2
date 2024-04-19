import { connectToDatabase } from "@/lib/connectToDatabase";

export default async function handler(request: any, response: any) {
  console.log("rendered list");
  try {
    const connection = await connectToDatabase();
    if (!connection) {
      throw new Error("Database connection failed");
    }
    const { mongoClient } = connection;

    const db = mongoClient.db("SurveyDB");
    const collection = db.collection("surveys");
    const results = await collection
      .find({})
      // .project({
      //     grades: 0,
      //     borough: 0,
      //     restaurant_id: 0,

      // })
      .limit(10)
      .toArray();
    response.status(200).json(results);
  } catch (err) {
    console.error(err);
  }
}

//SURVEY SCHEMA
// import mongoose, { Schema } from "mongoose";

// const VAR_MONGODB_URI = process.env.MONGODB_URI as string;

// mongoose.connect(VAR_MONGODB_URI);
// mongoose.Promise = global.Promise;

// const surveySchema = new Schema(
//   {
//     name: String,
//     emailAddress: String,
//     age: String,
//     location: String,
//     symptomsMonth: String,
//     symptomsYear: String,
//     symptomsSevere: String,
//     symptomsMinor: String,
//     symptomsComments: String,
//     treatmentsImpact: String,
//     treatmentsHelpful: String,
//     treatmentComments: String,
//     newsletter: Boolean,
//     followup: Boolean,
//     community: Boolean,
//     conclusionComments: String,
//   },
//   { timestamps: true },
// );

// const Survey = mongoose.models.Survey || mongoose.model("Survey", surveySchema);
// export default Survey;

// SURVEY ROUTE
// import Survey from "../../(models)/Survey";
// import { NextResponse } from "next/server";

// export async function POST(req: any) {
//   console.log("POST RAN");
//   try {
//     const body = await req.json();
//     console.log(body.data);
//     // const surveyData = body.formData;
//     // console.log(surveyData);
//     await Survey.create(body.data);
//     return NextResponse.json({ message: "Survey Submitted" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
