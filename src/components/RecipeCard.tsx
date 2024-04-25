import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { RecipeType } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DietaryRestrictionsBadge from "./DietaryRestrictionsBadge";
import RecipeCategoryCarousel from "./RecipeCarousel";
import Divider from "./Divider";

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
      <Link href={`/recipes`}>
        <p className="ml-2 text-sm font-bold text-brandLinkBlue">← back to recipes</p>
      </Link>
      <div className="mt-5 bg-brandDark px-5 py-3">
        <h1 className="text-2xl font-medium text-brandLight/90">{recipe.title}</h1>
      </div>
      <div className="md:flex  md:bg-brandSecondary/20">
        <div className="relative aspect-video w-screen md:w-[400px] md:max-w-[600px] lg:w-[600px]">
          <Image
            src={`/images/recipes/meals/${recipe.imageFilename}`}
            alt={`picture of {recipe.title}`}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
          <div className="absolute -bottom-[20px] right-8 flex gap-1">
            {recipe.isGlutenFree && <DietaryRestrictionsBadge iconType="glutenFree" />}
            {recipe.isDairyFree && <DietaryRestrictionsBadge iconType="dairyFree" />}
            {recipe.isSugarFree && <DietaryRestrictionsBadge iconType="sugarFree" />}
          </div>
        </div>
        <div className="mt-5 pl-0 sm:mt-10 md:pl-6">
          <div className="mb-6 mt-1 flex flex-col justify-start gap-0 pl-0 md:gap-5">
            <p className="text-normal text-nowrap pl-5">
              <span className=" font-bold md:text-lg">Created By:</span> {recipe.creator}
            </p>
            <p className="text-normal text-nowrap pl-5">
              <span className=" font-bold md:text-lg">Serves:</span> Family of {recipe.serves}
            </p>
            <p className="text-normal text-nowrap pl-5">
              <span className=" font-bold md:text-lg">Prep Time:</span> {recipe.cookingTime.prep} mins
            </p>
            <p className="text-normal text-nowrap pl-5">
              <span className=" font-bold md:text-lg">Cooking Time:</span> {recipe.cookingTime.cook} mins
            </p>
            <p className="text-normal text-nowrap pl-5">
              <span className=" font-bold md:text-lg">Total Time:</span> {recipe.cookingTime.total} mins
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Divider />
      </div>
      <div className="px-4 sm:pl-12">
        <div className="mb-6 mt-6 pl-0">
          <h3 className="text-xl font-bold tracking-tight">Description:</h3>
          <p className="text-normal mt-2 pl-5">{recipe.description}</p>
        </div>

        <Divider />
        <div className="mb-6 mt-6 pl-0">
          <h3 className="text-xl font-bold tracking-tight">Ingredient List:</h3>
          <div className="flex flex-col justify-end">
            {recipe.ingredients.map((ingredient, index) => {
              return (
                <p key={index} className="text-normal mt-2 pl-5">
                  {ingredient}
                </p>
              );
            })}
          </div>
        </div>

        <Divider />
        <div className="mb-0 mt-6 pl-0">
          <h3 className="mb-0 text-xl font-bold tracking-tight">Directions:</h3>
          {recipe.directions.map((direction, index) => (
            <div key={recipe.id} className="px-4 py-3">
              <h4 className="font-medium uppercase">Step {index + 1}</h4>
              <p className="text-normal mt-1.5 pl-5">{recipe.directions[index]}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <RecipeCategoryCarousel category={"Salads"} /> */}
    </div>
  );
};

export default RecipeCard;
