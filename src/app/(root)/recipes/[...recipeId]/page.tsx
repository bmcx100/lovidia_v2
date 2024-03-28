import RecipeCard from "@/components/RecipeCard";
import { RecipesData } from "@/constants/recipesData";
import React from "react";

// {params.type}
export default function Recipe({ params }: { params: { recipeId: string[] } }) {
  console.log(params.recipeId[0]);
  return (
    <section className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      {RecipesData.map((recipe) => {
        if (recipe.id === parseInt(params.recipeId[0])) {
          return (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          );
        }
      })}
    </section>
  );
}
