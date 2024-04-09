import React from "react";
import { useFormContext } from "react-hook-form";
import { SurveyFormDataType } from "../surveyData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact_Form_Welcome: React.FC = () => {
  const { register } = useFormContext<SurveyFormDataType>();

  return (
    <div className="flex flex-col gap-1">
      <div className="">
        <p className="mt-1 text-base font-normal text-brandDark">
          This questionaire is designed to prompt you to share your experience. Answer as little or as much as you feel
          comfortable with.
        </p>
      </div>
      <Divider />
      <div className="">
        <p className="mt-1 text-base font-normal text-brandDark">
          If you&apos;d prefer to share without the prompts. You can email us at contact@lovidia.net or click this form.
        </p>
        <div className="my-8 flex w-full justify-center">
          <Link href="/contact" className="flex w-full justify-center ">
            <Button variant={"outline"} className=" w-3/4">
              Contact Us Form
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form_Welcome;
