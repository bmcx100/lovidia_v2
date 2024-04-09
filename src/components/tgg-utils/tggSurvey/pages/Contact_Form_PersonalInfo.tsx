"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { SurveyFormDataType } from "../surveyData";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact_Form_PersonalInfo: React.FC = () => {
  const { register } = useFormContext<SurveyFormDataType>();

  return (
    <div className="flex flex-col gap-1 px-1">
      <h2 className="m-0 text-xl font-medium">Your Information</h2>
      {/* Example form fields */}
      <label htmlFor="name" className="mt-2 block text-sm font-medium text-gray-700">
        Name
      </label>
      <input id="name" {...register("name")} placeholder="Name" className="" />

      <label htmlFor="email" className="mt-5  block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <input id="email" {...register("emailAddress")} placeholder="Email Address" />
      <label htmlFor="age" className="mt-5  block text-sm font-medium text-gray-700">
        Age
      </label>
      <select
        id="age"
        {...register("age")}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option value="select">Select your age range</option>
        <option value="under_18">Under 18</option>
        <option value="18_25">18-25</option>
        <option value="26_35">26-35</option>
        <option value="36_45">36-45</option>
        <option value="46_55">46-55</option>
        <option value="56_65">56-65</option>
        <option value="66_70">66-70</option>
        <option value="over_70">Over 70</option>
        <option value="not_applicable">Not Applicable</option>
      </select>

      <label htmlFor="location" className="mt-5 block  text-sm font-medium text-gray-700">
        Location
      </label>

      <select
        id="location"
        {...register("location")}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option value="select">Select your location</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="Russia">Russia</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Belgium">Belgium</option>
        <option value="Sweden">Sweden</option>
        <option value="Poland">Poland</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Norway">Norway</option>
        <option value="Austria">Austria</option>
        <option value="China">China</option>
        <option value="India">India</option>
        <option value="Brazil">Brazil</option>
        <option value="South Africa">South Africa</option>
        <option value="Australia">Australia</option>
        <option value="Other">Other</option>
        <option value="Not applicable">Not applicable</option>
      </select>
    </div>
  );
};

export default Contact_Form_PersonalInfo;
