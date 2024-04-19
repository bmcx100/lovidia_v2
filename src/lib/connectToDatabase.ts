import { MongoClient } from "mongodb";

type DatabaseConnection = {
  mongoClient: MongoClient;
};

const uri = process.env.MONGODB_URI;
const options = {};

let mongoClient: MongoClient | undefined; // cached connection

if (!process.env.MONGODB_URI) {
  throw new Error("Mongo URI not found");
}

export async function connectToDatabase(): Promise<DatabaseConnection | undefined> {
  try {
    if (mongoClient) {
      return { mongoClient };
    }

    if (uri) {
      mongoClient = await new MongoClient(uri, options).connect();
      console.log("Just Connected!");
      return { mongoClient };
    }
  } catch (err) {
    console.error(err);
    throw new Error("failed to connect to MongoDB");
  }
  return undefined;
}
