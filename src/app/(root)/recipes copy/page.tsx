"use client";

import RecipeCategoryCarousel from "@/components/RecipeCarousel";
import { Button } from "@/components/ui/button";
import { RecipeCategoriesData } from "@/constants/recipesData";
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
        {/* border-2 border-red-500 */}
        <div className="mt-1.5 grid grid-cols-12 ">
          <Button
            variant="ghost"
            className="m-0 ml-2 flex h-full w-fit flex-col items-start justify-start p-0 opacity-50"
            onClick={() => setIsLongDescVisible((prevState) => !prevState)}
          >
            <div className="m-0 my-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-brandDark ">
              {isLongDescVisible && <Arrow className="m-0 h-2 w-2" />}
              {!isLongDescVisible && <Arrow className="m-0 h-2 w-2 rotate-180 " />}
            </div>
            {/* <p className="text-xs">CLOSE</p> */}
          </Button>
          {!isLongDescVisible && (
            <div className="col-span-11 mx-1">
              <p className="text-sm">
                Many individuals with Long COVID experience flare-ups linked to gluten, dairy, and sugar—hidden culprits
                in many foods...{" "}
                <span
                  className="font-bold text-brandLinkBlue drop-shadow-sm"
                  onClick={() => setIsLongDescVisible((prevState) => !prevState)}
                >
                  (Continued)
                </span>
              </p>
            </div>
          )}
          {isLongDescVisible && (
            <div className="col-span-11 mx-1">
              <p className="text-sm">
                Many individuals with Long COVID experience flare-ups linked to gluten, dairy, and sugar—hidden culprits
                in many foods.
              </p>
              <p className="text-sm">
                Our recipes are organized and sorted specifically to help minimize the impact of Long COVID by giving us
                access to gluten-free eating, recognizing the role of diet in symptom management.
              </p>

              <p className="text-sm">
                Here, you&apos;ll discover delicious, wholesome meals tailored to avoid these triggers, empowering you
                to feel better and live healthier. Explore our collection to find your path to a more comfortable,
                symptom-reduced life.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-brandDark pb-10 pt-2">
          <RecipeCategoryCarousel category="Type of Dish" />
          <RecipeCategoryCarousel category="Meal Times" />
          <RecipeCategoryCarousel category="Proteins" />
          <RecipeCategoryCarousel category="Salads" />
        </div>
      </div>
    </section>
  );
}
