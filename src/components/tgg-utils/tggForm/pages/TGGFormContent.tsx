"use client";

import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import React from "react";
import { useFormContext } from "react-hook-form";
import { tggFormDataType } from "../constants/tggFormData";

type TGGFormContentProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TGGFormContent: React.FC<TGGFormContentProps> = ({ handleSubmit }) => {
  const { register } = useFormContext<tggFormDataType>();
  return (
    <div className="mx-2">
      <Card className="mx-auto w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px]">
        <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-2 pt-6">
          <div className="flex flex-row items-start justify-center">
            <CardTitle className="m-0 text-xl font-medium">Share Your Recipe</CardTitle>
          </div>
        </CardHeader>
        <div>
          <CardDescription className="py-1 pl-6 pr-3 sm:px-12 ">
            Fill out the form below to submit your recipe, if you have any questions you can contact us at
            contact@lovidia.net
          </CardDescription>
          <Divider />
        </div>
        <CardContent className="mt-5 py-0">
          <form
            onSubmit={handleSubmit}
            className=" mx-auto flex max-w-xs flex-col justify-center  md:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            <div className="flex flex-col gap-1 px-1">
              <h2 className="m-0 text-xl font-medium">Your Information</h2>
              {/* Example form fields */}
              <label htmlFor="name" className="mt-2 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                placeholder="Name"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="email" className="mt-5  block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                {...register("emailAddress")}
                placeholder="Email Address"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />
              <h2 className="m-0 mt-6 text-xl font-medium">Your Recipe</h2>
              {/* Example form fields */}

              <label htmlFor="recipe_title" className="mt-2 block text-sm font-medium text-gray-700">
                Recipe Title
              </label>
              <input
                id="recipe_title"
                {...register("recipe_title")}
                placeholder="Recipe Title"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />
              <label htmlFor="recipe_description" className="mt-2 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="recipe_description"
                {...register("recipe_description")}
                placeholder="Recipe Description"
                className="background h-32 rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_serves" className="mt-2 block text-sm font-medium text-gray-700">
                Serves
              </label>
              <input
                id="recipe_serves"
                {...register("recipe_serves")}
                placeholder="Recipe Serves"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_prepttime" className="mt-2 block text-sm font-medium text-gray-700">
                Prep Time
              </label>
              <input
                id="recipe_prepttime"
                {...register("recipe_prepttime")}
                placeholder="Recipe Prep Time"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_cooktime" className="mt-2 block text-sm font-medium text-gray-700">
                Cook Time
              </label>
              <input
                id="recipe_cooktime"
                {...register("recipe_cooktime")}
                placeholder="Recipe Cook Time"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_totaltime" className="mt-2 block text-sm font-medium text-gray-700">
                Total Time
              </label>
              <input
                id="recipe_totaltime"
                {...register("recipe_totaltime")}
                placeholder="Recipe Total Time"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_ingredients" className="mt-2 block text-sm font-medium text-gray-700">
                Ingredients List
              </label>
              <textarea
                id="recipe_ingredients"
                {...register("recipe_ingredients")}
                placeholder="Recipe Ingredients List"
                className="background h-32 rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_directions" className="mt-2 block text-sm font-medium text-gray-700">
                Directions
              </label>
              <textarea
                id="recipe_directions"
                {...register("recipe_directions")}
                placeholder="Directions"
                className="background h-32 rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_glutenFree" className="mt-2 block text-sm font-medium text-gray-700">
                Gluten Free
              </label>
              <input
                id="recipe_glutenFree"
                {...register("recipe_glutenFree")}
                placeholder="Gluten Free"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_dairyFree" className="mt-2 block text-sm font-medium text-gray-700">
                Dairy Free
              </label>
              <input
                id="recipe_dairyFree"
                {...register("recipe_dairyFree")}
                placeholder="Dairy Free"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_sugarFree" className="mt-2 block text-sm font-medium text-gray-700">
                Sugar Free
              </label>
              <input
                id="recipe_sugarFree"
                {...register("recipe_sugarFree")}
                placeholder="Sugar Free"
                className="background rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />

              <label htmlFor="recipe_notes" className="mt-2 block text-sm font-medium text-gray-700">
                Notes / Comments
              </label>
              <textarea
                id="recipe_notes"
                {...register("recipe_notes")}
                placeholder="Notes / Comments"
                className="background h-32 rounded-sm bg-slate-100 p-2 placeholder:text-sm"
              />
            </div>
            <div className="mt-1">
              <Divider />
              <div className="my-5 flex justify-center">
                <Button type="submit" className="mx-auto w-3/4">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TGGFormContent;
