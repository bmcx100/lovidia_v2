"use client";

import RecipeCard from "@/components/RecipeCard";
import RecipeCarousel from "@/components/RecipeCarousel";
import RecipeFeatured from "@/components/RecipeFeatured";
import RecipeSummaryCard from "@/components/RecipeSummaryCard";
import { Button } from "@/components/ui/button";
import { RecipeCategoriesData, RecipesData } from "@/constants/recipesData";
import { TriangleIcon as Arrow } from "lucide-react";
import React from "react";

export default function Home() {
  const [isLongDescVisible, setIsLongDescVisible] = React.useState(false);
  return (
    <section className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      <div className="mt-2">
        <div className="bg-primary">
          {/* <h2 className="px-4 py-2 text-2xl font-bold shadow-md shadow-primary/5 lg:text-5xl"> */}
          <h1 className="py-4 pl-2 text-3xl font-normal sm:text-4xl lg:text-5xl">
            Your <span className="font-black tracking-tighter">Long COVID</span> Recipes
          </h1>
        </div>
        <p className="text-md mx-3 mt-3 font-medium text-foreground/90 lg:text-2xl">
          Time to dive into a world where eating well means feeling better.
        </p>
      </div>
      <div>
        {RecipesData.map((recipe) => {
          if (recipe.isFeatured) {
            return <RecipeFeatured key={recipe.id} recipe={recipe} />;
          }
        })}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-5">
        {RecipesData.map((recipe) => {
          return <RecipeSummaryCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
      {/* <div className="mt-16">
        <div className="bg-brandDark pb-10 pt-2">
          <RecipeCarousel category="Dinner" />
        </div>
      </div> */}
    </section>
  );
}
