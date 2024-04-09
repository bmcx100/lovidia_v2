import React from "react";
import { useFormContext } from "react-hook-form";
import { SurveyFormDataType } from "../surveyData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Contact_Form_Treatments: React.FC = () => {
  const { register } = useFormContext<SurveyFormDataType>();

  return (
    <div className="flex flex-col gap-1 px-3">
      <h2 className=" m-0 text-xl font-medium">Your Treatments</h2>
      {/* Example form fields */}
      <div className="grid  grid-cols-2 gap-1">
        {/* <p className="col-span-2 gap-0 text-base">When did you first notice your Long COVID symptoms?</p> */}
      </div>
      <label htmlFor="treatmentsImpact" className="mt-2 block text-sm font-medium text-gray-700">
        Impact of medications and therapies:
      </label>
      <Textarea
        id="treatmentsImpact"
        {...register("treatmentsImpact")}
        placeholder="List any medications or therapies you've used and how they've impacted your daily life."
      />
      <label htmlFor="treatmentsHelpful" className="mt-2 block text-sm font-medium text-gray-700">
        What has been helpful for you?
      </label>
      <Textarea
        id="treatmentsHelpful"
        {...register("treatmentsHelpful")}
        placeholder="What changes have you found helpful in managing your Long COVID symptoms?"
      />
      <label htmlFor="treatmentComments" className="mt-2 block text-sm font-medium text-gray-700">
        Comments / Thoughts:
      </label>
      <Textarea
        id="treatmentComments"
        {...register("treatmentComments")}
        placeholder="Please share any other thoughts you have on treatments."
      />
    </div>
  );
};

export default Contact_Form_Treatments;
