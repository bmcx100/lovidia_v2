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
    const collection = db.collection("recipesubmissions");
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
