"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { SurveyFormDataType } from "../surveyData";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact_Form_PersonalInfo: React.FC = () => {
  const { register } = useFormContext<SurveyFormDataType>();
  return (
    <div>
      <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-brandPrimary/25 p-4">
        <div>
          <input type="checkbox" id="newsletter" {...register("newsletter")} />
        </div>
        <label htmlFor="newsletter" className="space-y-1 leading-none">
          <div className="mt-1 font-medium">Join our Newsletter.</div>
          <div className="pt-4 text-sm">
            Stop researching on your own. Get them as often or rarely as you like and start making our numbers
            our&nbsp;strength.
          </div>
        </label>
      </div>
      <div className="mt-5 flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-brandPrimary/25  p-4">
        <div>
          {/* <Checkbox checked={field.value} onCheckedChange={field.onChange} /> */}
          <div>
            <input type="checkbox" id="followup" {...register("followup")} />
          </div>
        </div>
        <label htmlFor="followup" className="space-y-1 leading-none">
          <div className="mt-1 font-medium">I want to share my story. Please send me&nbsp;information.</div>
          <div className="pt-4 text-sm">
            Anonomously is fine, but sharing your story can be therapeutic for you and others
            in&nbsp;the&nbsp;community.
          </div>
        </label>
      </div>

      <div className=" mt-5 flex flex-row items-start space-x-3 space-y-0 rounded-md border bg-brandPrimary/25 p-4">
        <div>
          {/* <Checkbox checked={field.value} onCheckedChange={field.onChange} /> */}
          <div>
            <input type="checkbox" id="community" {...register("community")} />
          </div>
        </div>
        <label htmlFor="community" className="space-y-1 leading-none">
          <div className="mt-1 font-medium">I want to get involved and help others. Please contact&nbsp;me.</div>
          <div className="pt-4 text-sm">
            If you feel you can contribute please let us know. Whether you&apos;re an expert in your field or a
            passionate person with good ideas we&apos;d love to talk&nbsp;to&nbsp;you.
          </div>
        </label>
      </div>
      <div className="mt-5">
        <div>Comments / Thoughts:</div>
        <div className="mt-2">
          {/* <Textarea {...field} placeholder="Please share anything you didn't have a chance to share earlier." /> */}
          <Textarea
            id="treatmentsHelpful"
            {...register("conclusionComments")}
            placeholder="Please share anything you didn't have a chance to share earlier."
          />
        </div>
      </div>
    </div>
  );
};

export default Contact_Form_PersonalInfo;
