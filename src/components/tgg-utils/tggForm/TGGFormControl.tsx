"use client";

import React from "react";
import { tggFormSchema, tggFormDataType } from "./constants/tggFormData";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { stringify } from "querystring";
import TGGFormContent from "./pages/TGGFormContent";

const TGGFormControl = () => {
  const tggFormData = useForm<tggFormDataType>({
    resolver: zodResolver(tggFormSchema),
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

  const router = useRouter();

  //SUBMITTING LOGIC
  const { handleSubmit, setValue, reset } = tggFormData;

  const onSubmit = async (data: tggFormDataType) => {
    // console.log("onSubmit triggered with data:", data);
    try {
      // PAGE WHERE FINAL SUBMIT BUTTON IS CLICKED
      const res = await fetch("/api/RecipeSubmissions", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to submit Recipe Submission.");
      }

      reset();
      router.refresh();
      router.push("/contact/share/completed");
      console.log("Form processing complete.");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // Call the handleSubmit function when the form is submitted
  const handleFormSubmit = tggFormData.handleSubmit(onSubmit);
  const wrappedHandleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // console.log("a Form submit started");
    // PAGE WHERE SUBMIT BUTTON IS JUST A SKIP (NO FORM INPUTS)

    handleFormSubmit(event)
      .then(() => {
        // console.log("m Form submit finished");
      })
      .catch((error) => {
        console.error("Error in form submission process:", error);
      });
  };

  return (
    <FormProvider {...tggFormData}>
      <div>
        <TGGFormContent
          handleSubmit={wrappedHandleFormSubmit} // Pass the handleSubmit function for form submission
        />
      </div>
    </FormProvider>
  );
};

export default TGGFormControl;
