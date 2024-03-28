import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { RecipeType } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DietaryRestrictionsBadge from "./DietaryRestrictionsBadge";

interface RecipePropsType {
  recipe: RecipeType;
}

const goldStarEl = (
  <Image
    src="/images/recipes/assets/gold_star.svg"
    alt="rating star"
    width="15"
    height="15"
    className="rounded-full drop-shadow-sm"
  />
);

const greyStarEl = (
  <Image
    src="/images/recipes/assets/grey_star.svg"
    alt="greyed rating star"
    width="15"
    height="15"
    className="rounded-full drop-shadow-sm"
  />
);

const RecipeCard: React.FC<RecipePropsType> = ({ recipe }) => {
  return (
    <div>
      <Link href={`/recipes/category/${recipe.category}`}>
        <p className="ml-2 text-sm font-bold text-brandLinkBlue">
          ← back to {recipe.category}
        </p>
      </Link>
      <div className="mt-2 bg-brandDark px-5 py-3">
        <h1 className="text-2xl font-medium text-brandLight/90">
          {recipe.title}
        </h1>
      </div>
      <div className="aspect-w-16 aspect-h-9 relative h-[300px] sm:w-[300px]">
        <Image
          src={`/images/recipes${recipe.imageFilename}`}
          alt="picture of a pizza"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
        <div className="absolute -bottom-[20px] right-8 flex gap-1">
          {recipe.isGlutenFree && (
            <DietaryRestrictionsBadge iconType="glutenFree" />
          )}
          {recipe.isDairyFree && (
            <DietaryRestrictionsBadge iconType="dairyFree" />
          )}
          {recipe.isSugarFree && (
            <DietaryRestrictionsBadge iconType="sugarFree" />
          )}
        </div>
      </div>
      <div className="mt-10 pl-4">
        <div className="mt-6 pl-0">
          <h3 className="text-xl font-bold tracking-tight">Details:</h3>
          <p className="text-normal mt-2 pl-5 text-orange-600">Serves 2</p>
          <p className="text-normal mt-0 pl-5">
            Cooking Time: {recipe.cookingTime}
          </p>
        </div>

        <div className="mt-6 pl-0">
          <h3 className="text-xl font-bold tracking-tight">Description:</h3>
          <p className="text-normal mt-2 pl-5">{recipe.description}</p>
        </div>

        <div className="mt-6 pl-0">
          <h3 className="text-xl font-bold tracking-tight">Ingredient List:</h3>
          <p className="text-normal mt-2 pl-5">{recipe.ingredients}</p>
        </div>

        <div className="mt-6 pl-0">
          <h3 className="mb-3 text-xl font-bold tracking-tight">Directions</h3>
          {recipe.directions.map((direction, index) => (
            <div key={recipe.id} className="px-4 py-3">
              <h4 className="font-medium uppercase">Step {index + 1}</h4>
              <p className="text-normal mt-1.5 pl-5">
                {recipe.directions[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
