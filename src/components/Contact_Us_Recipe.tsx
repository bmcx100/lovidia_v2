"use client";

import Link from "next/link";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Breakpoints from "./tgg-utils/tggBreakpointBars";
import { sendContactUsRecipe } from "@/hooks/sendContactUsRecipe";
import { formSchemaContactUsRecipe } from "@/constants/contactUsRecipeForm";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Contact_Us = () => {
  const form = useForm<z.infer<typeof formSchemaContactUsRecipe>>({
    resolver: zodResolver(formSchemaContactUsRecipe),
    defaultValues: {
      name: "",
      emailAddress: "",
      recipe_title: "",
      recipe_description: "",
      recipe_serves: "",
      recipe_prepttime: "",
      recipe_cooktime: "",
      recipe_totaltime: "",
      recipe_ingredients: "",
      recipe_directions: "",
      recipe_glutenFree: "",
      recipe_dairyFree: "",
      recipe_sugarFree: "",
      recipe_notes: "",
    },
  });

  const {
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaContactUsRecipe),
  });

  const { toast } = useToast();

  const localHandleSubmit = (values: z.infer<typeof formSchemaContactUsRecipe>) => {
    console.log(values);
    sendContactUsRecipe(values);
    // form.reset();
    toast({
      title: "Recipe Form Submitted",
      description: "Thank you for sharing your recipe with us.",
    });
  };

  const emailAddressToCopy = "contact@lovidia.net";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddressToCopy);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div>
      {/* <Breakpoints /> */}
      <div className="mx-auto  max-w-[1024px] ">
        <div>
          <div>
            <h2 className="px-3 text-xl sm:pl-16 sm:text-2xl">We&apos;re&nbsp;Listening</h2>
            <h2 className="-mx-5 mb-3 mt-0  bg-brandSecondary  px-8 py-2 text-3xl capitalize sm:pl-20 sm:text-5xl">
              Tell Us Your&nbsp;Story
            </h2>
          </div>

          <div className=" px-3  text-sm sm:pl-16 sm:text-base">
            <p>
              Fill out the form below to submit your recipe, if you have any questions you can contact us at{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex h-fit items-center justify-end">
                      <span onClick={handleCopy} className="cursor-pointer font-medium text-brandLinkBlue">
                        contact@lovidia.net
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="px-2 py-1">
                    <p className="m-0">Click to Copy to Clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
          </div>
        </div>
        <div className="mx-3 mt-8 min-w-[350px] rounded-lg bg-brandSecondary/30 px-3 py-5 drop-shadow-sm sm:mx-auto sm:mt-12 sm:max-w-lg  sm:py-8">
          <div className="min-w-[330px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(localHandleSubmit)}
                className="mx-auto flex w-full max-w-md flex-col gap-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_title"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Recipe Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Recipe Title" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_description"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Recipe Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Recipe Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_serves"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Serves</FormLabel>
                        <FormControl>
                          <Input placeholder="Serves" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_prepttime"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Prep Time</FormLabel>
                        <FormControl>
                          <Input placeholder="Prep Time" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_cooktime"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Cook Time</FormLabel>
                        <FormControl>
                          <Input placeholder="Cook Time" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_totaltime"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Total Time</FormLabel>
                        <FormControl>
                          <Input placeholder="Total Time" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_ingredients"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Ingredients</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ingredients" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_directions"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Directions</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Directions" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_glutenFree"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Gluten Free?</FormLabel>
                        <FormControl>
                          <Input placeholder="Is this recipe gluten free?" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_dairyFree"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Dairy Free?</FormLabel>
                        <FormControl>
                          <Input placeholder="Is this recipe dairy free?" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_sugarFree"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Sugar Free?</FormLabel>
                        <FormControl>
                          <Input placeholder="Is this recipe sugar free?" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="recipe_notes"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any other notes or comments you would like to share?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
