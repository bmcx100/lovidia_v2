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
    <section className="mx-0 mt-2 min-w-[330px]  sm:mt-6">
      <div className="mx-auto  max-w-[1024px] ">
        <h2 className="-mx-5 mb-3 mt-0  bg-brandSecondary px-8 py-2 text-3xl capitalize md:pl-20 md:text-5xl">
          Your <span className="font-black tracking-tighter">Long COVID</span> Recipes
        </h2>
      </div>
      <div className="mx-auto  max-w-[1024px] ">
        {/* <section className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      <div className="mt-0">
        <div className="bg-brandSecondary">
          {/* <h2 className="px-4 py-2 text-2xl font-bold shadow-md shadow-primary/5 lg:text-5xl"> 
          <h1 className="px-8 py-4 text-3xl font-normal sm:pl-20 sm:text-4xl lg:text-5xl">
            Your <span className="font-black tracking-tighter">Long COVID</span> Recipes
          </h1>
        </div> */}
        <p className="text-md mx-0 mt-3 px-3 font-medium text-foreground/90 md:pl-16 lg:text-2xl">
          Adhering to a strict Long COVID meal plan for even a week is likely to help reduce your symptoms. Eat only
          these foods and let us know the impact it has on your health.
        </p>
        <div className="mx-2 md:mx-12">
          {RecipesData.map((recipe) => {
            if (recipe.isFeatured) {
              return <RecipeFeatured key={recipe.id} recipe={recipe} />;
            }
          })}
        </div>
        <div className="mx-12 hidden flex-wrap justify-between gap-x-3 gap-y-5 lg:flex">
          {RecipesData.map((recipe, index) => {
            if (index < 7 && !recipe.isFeatured) {
              return <RecipeSummaryCard key={recipe.id} recipe={recipe} />;
            }
          })}
        </div>
        <div className="mt-8 lg:hidden">
          <div className="bg-brandDark pb-10 pt-2">
            <RecipeCarousel category="Dinner" />
          </div>
        </div>
      </div>
    </section>
  );
}
