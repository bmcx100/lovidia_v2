"use client";

import RecipeSummaryCard from "@/components/RecipeSummaryCard";
import { RecipesData } from "@/constants/recipesData";
import React from "react";

import Image from "next/image";
import DietaryRestrictionsBadge from "@/components/DietaryRestrictionsBadge";
import Link from "next/link";

type SearchCriteria = {
  isActiveGlutenFree: boolean;
  isActiveDairyFree: boolean;
  isActiveSugarFree: boolean;
};

export default function Category({ params }: { params: { type: string } }) {
  const [searchCriteria, setSearchCriteria] = React.useState<SearchCriteria>({
    isActiveGlutenFree: false,
    isActiveDairyFree: false,
    isActiveSugarFree: false,
  });

  const toggleCriteria = (criteria: keyof SearchCriteria) => {
    setSearchCriteria((prev) => ({ ...prev, [criteria]: !prev[criteria] }));
  };

  const filteredRecipes = RecipesData.filter(
    (recipe) =>
      recipe.category.toLowerCase() === params.type.toLowerCase() &&
      (!searchCriteria.isActiveGlutenFree || recipe.isGlutenFree) &&
      (!searchCriteria.isActiveDairyFree || recipe.isDairyFree) &&
      (!searchCriteria.isActiveSugarFree || recipe.isSugarFree),
  );

  return (
    <section className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      <div className="mt-2">
        <div className="bg-primary">
          {/* <h2 className="px-4 py-2 text-2xl font-bold shadow-md shadow-primary/5 lg:text-5xl"> */}
          <h1 className="py-4 pl-2 text-3xl font-normal sm:text-4xl lg:w-[420px] lg:text-5xl">
            Your <span className="font-black tracking-tighter">Long Covid</span> Recipes
          </h1>
        </div>

        <div className="mr-2 mt-2 flex justify-end gap-2 text-primary">
          <DietaryRestrictionsBadge
            onClick={() => toggleCriteria("isActiveGlutenFree")}
            buttonColour={searchCriteria.isActiveGlutenFree ? "gold" : "grey"}
            iconType="glutenFree"
          />
          <DietaryRestrictionsBadge
            onClick={() => toggleCriteria("isActiveDairyFree")}
            buttonColour={searchCriteria.isActiveDairyFree ? "gold" : "grey"}
            iconType="dairyFree"
          />
          <DietaryRestrictionsBadge
            onClick={() => toggleCriteria("isActiveSugarFree")}
            buttonColour={searchCriteria.isActiveSugarFree ? "gold" : "grey"}
            iconType="sugarFree"
          />
        </div>
        <p className="text-md mx-3 mt-3 font-medium text-foreground/90">
          Browse our list of {params.type.toLowerCase()} and click to see more details. Use the buttons above to remove
          recipes that won&apos;t agree with you.
        </p>
      </div>

      <Link href="/recipes">
        <p className="ml-2 text-sm font-bold text-brandLinkBlue">← back to categories</p>
      </Link>
      {filteredRecipes.map((recipe) => {
        return <RecipeSummaryCard key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
}
