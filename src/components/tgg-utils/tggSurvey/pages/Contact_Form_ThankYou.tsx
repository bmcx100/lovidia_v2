import React from "react";
import { useFormContext } from "react-hook-form";
import { SurveyFormDataType } from "../surveyData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact_Form_ThankYou: React.FC = () => {
  const { register } = useFormContext<SurveyFormDataType>();

  return (
    <div className="flex flex-col gap-1">
      <div className="">
        <p className="mt-1 text-base font-normal text-brandDark">Thank you for completing the form</p>
      </div>
      <Divider />
    </div>
  );
};

export default Contact_Form_ThankYou;
