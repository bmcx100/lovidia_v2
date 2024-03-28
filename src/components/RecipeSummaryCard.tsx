import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { RecipeType } from "@/constants/recipesData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const RecipeSummaryCard: React.FC<RecipePropsType> = ({ recipe }) => {
  return (
    <div>
      <Card
        key="recipe.id"
        className="mt-5 flex h-full max-w-[600px] flex-col justify-between  overflow-hidden shadow-md sm:max-w-[300px]"
      >
        <CardHeader className="p-0">
          <div className="relative h-[300px] w-screen sm:w-[300px]">
            <Link href={`/recipes/${recipe.id}`}>
              <Image
                src={`/images/recipes${recipe.imageFilename}`}
                alt="picture of a pizza"
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
              />
            </Link>
            <div className="absolute -bottom-[20px] right-8 flex gap-1">
              {recipe.isGlutenFree && (
                <Image
                  src="/images/recipes/assets/gluten_free.svg"
                  alt="gluten free badge"
                  width="45"
                  height="45"
                  className="rounded-full drop-shadow-lg "
                />
              )}
              {recipe.isSugarFree && (
                <Image
                  src="/images/recipes/assets/sugar_free.svg"
                  alt="sugar free badge"
                  width="45"
                  height="45"
                  className="rounded-full drop-shadow-lg "
                />
              )}
              {recipe.isDairyFree && (
                <Image
                  src="/images/recipes/assets/dairy_free.svg"
                  alt="dairy free badge"
                  width="45"
                  height="45"
                  className="rounded-full drop-shadow-md"
                />
              )}
            </div>
          </div>
        </CardHeader>
        <div className="ml-6 mt-6 flex items-center justify-start gap-0.5">
          {recipe.stars >= 1 ? goldStarEl : greyStarEl}
          {recipe.stars >= 2 ? goldStarEl : greyStarEl}
          {recipe.stars >= 3 ? goldStarEl : greyStarEl}
          {recipe.stars >= 4 ? goldStarEl : greyStarEl}
          {recipe.stars >= 5 ? goldStarEl : greyStarEl}
        </div>

        <div className="mx-6 mb-0 mt-3 flex flex-col justify-between">
          <CardTitle className=" text-2xl">{recipe.title}</CardTitle>
          <CardDescription>
            <span className="font-bold">Ingredients:</span> {recipe.ingredients}
          </CardDescription>
          <CardContent></CardContent>
        </div>
        <CardFooter className="mt-auto bg-secondary  p-3">
          <Link href={`/recipes/${recipe.id}`}>
            <Button className="w-full "> View Recipe</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RecipeSummaryCard;
