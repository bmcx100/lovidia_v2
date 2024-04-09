import React from "react";
import { useFormContext } from "react-hook-form";
import { SurveyFormDataType } from "../surveyData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Contact_Form_Symptoms: React.FC = () => {
  const { register } = useFormContext<SurveyFormDataType>();

  return (
    <div className="flex flex-col gap-1 px-1">
      <h2 className=" m-0 text-xl font-medium">Your Symptoms</h2>
      {/* Example form fields */}
      <div className="grid  grid-cols-2 gap-1">
        {/* <p className="col-span-2 gap-0 text-base">When did you first notice your Long COVID symptoms?</p> */}
        <p className="col-span-3 my-0 leading-relaxed">When did you first notice your Long COVID symptoms?</p>
        <div></div>
      </div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="symptomsMonth" className="mt-5  block text-sm font-medium text-gray-700">
            Month
          </label>
          <select
            id="symptomsMonth"
            {...register("symptomsMonth")}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="select">Select One</option>
            <option value="Not Applicable">Not Applicable</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div>
          <label htmlFor="symptomsYear" className="mt-5  block text-sm font-medium text-gray-700">
            Year
          </label>
          <select
            id="symptomsYear"
            {...register("symptomsYear")}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="select">Select One</option>
            <option value="Not Applicable">Not Applicable</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
      <label htmlFor="symptomsSevere" className="mt-2 block text-sm font-medium text-gray-700">
        Severe Symptoms:
      </label>
      <Textarea
        id="symptomsSevere"
        {...register("symptomsSevere")}
        placeholder="Please list any Severe Symptoms you've experienced."
      />
      <label htmlFor="symptomsMinor" className="mt-2 block text-sm font-medium text-gray-700">
        Minor Symptoms:
      </label>
      <Textarea
        id="symptomsMinor"
        {...register("symptomsMinor")}
        placeholder="Please list any Minor Symptoms you've experienced."
      />
      <label htmlFor="symptomsComments" className="mt-2 block text-sm font-medium text-gray-700">
        Comments / Thoughts:
      </label>
      <Textarea
        id="symptomsComments"
        {...register("symptomsComments")}
        placeholder="How have your symptoms impacted your daily life?"
      />
    </div>
  );
};

export default Contact_Form_Symptoms;
