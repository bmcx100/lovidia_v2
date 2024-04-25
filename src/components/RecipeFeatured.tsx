import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { RecipeType } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DietaryRestrictionsBadge from "./DietaryRestrictionsBadge";
import RecipeCategoryCarousel from "./RecipeCarousel";
import Divider from "./Divider";
import Breakpoints from "./tgg-utils/tggBreakpointBars";

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

const RecipeFeatured: React.FC<RecipePropsType> = ({ recipe }) => {
  return (
    <div className="mx-auto mt-5  w-full min-w-[330px]  max-w-[1024px] overflow-hidden rounded-lg bg-brandSecondary/20">
      {/* <Breakpoints /> */}
      <div className="bg-brandDark px-5 py-3">
        <h1 className="text-lg font-medium text-brandLight/90 md:text-2xl">{recipe.title}</h1>
      </div>
      <div className="md:flex">
        <div className="relative mt-0 aspect-video w-full md:max-w-[500px] lg:max-w-[600px]">
          <Image
            src={`/images/recipes/meals/${recipe.imageFilename}`}
            alt={`picture of ${recipe.title}`}
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

        <div className="mt-8 px-3 md:mt-12 md:mt-5 md:w-2/3 md:text-xl">
          <p className="">{recipe.description}</p>
          <div className="mt-12 hidden flex-col items-start justify-start pl-0 lg:flex  ">
            <p>
              <span className="text-nowrap font-bold md:text-xl">Creator:</span> {recipe.creator}
            </p>
            <p className="">
              {" "}
              <span className="text-nowrap font-bold md:text-xl">Total Time:</span> {recipe.cookingTime.total} mins
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-12 md:hidden ">
        <Divider />
      </div>
      <div className="mt-3 px-3 md:mt-6">
        <div className="flex flex-wrap items-start justify-around pl-0 lg:hidden">
          <p>
            <span className="text-nowrap font-bold md:text-xl">Creator:</span> {recipe.creator}
          </p>
          <p className="">
            {" "}
            <span className="text-nowrap font-bold md:text-xl">Total Time:</span> {recipe.cookingTime.total} mins
          </p>
        </div>
      </div>
      <CardFooter className="mt-5 flex justify-end bg-secondary  p-3">
        <Link href={`/recipes/${recipe.id}`}>
          <Button className="w-full lg:text-lg "> View Recipe</Button>
        </Link>
      </CardFooter>
    </div>
  );
};

export default RecipeFeatured;
