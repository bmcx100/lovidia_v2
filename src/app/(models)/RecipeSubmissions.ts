import mongoose, { Schema } from "mongoose";

const VAR_MONGODB_URI = process.env.MONGODB_URI as string;

mongoose.connect(VAR_MONGODB_URI);
mongoose.Promise = global.Promise;

const recipeSubmissionsSchema = new Schema(
  {
    name: String,
    emailAddress: String,
    recipe_title: String,
    recipe_description: String,
    recipe_serves: String,
    recipe_prepttime: String,
    recipe_cooktime: String,
    recipe_totaltime: String,
    recipe_ingredients: String,
    recipe_directions: String,
    recipe_glutenFree: String,
    recipe_dairyFree: String,
    recipe_sugarFree: String,
    recipe_notes: String,
  },
  { timestamps: true },
);

const RecipeSubmissions =
  mongoose.models.RecipeSubmissions || mongoose.model("RecipeSubmissions", recipeSubmissionsSchema);
export default RecipeSubmissions;
