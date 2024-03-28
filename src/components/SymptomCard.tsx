import React from "react";
// import { SymptomDataType } from "@/constants/symptomsData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Breakpoints from "./tgg-utils/Breakpoints";

interface SymptomDataPropsType {
  symptom: SymptomDataType;
}
const SymptomCard: React.FC<SymptomDataPropsType> = ({ symptom }) => {
  return (
    <div className="mt-8">
      <div className=" mx-auto max-w-[1024px]">
        <div className="mx-4 flex items-center justify-center">
          <div className="grid grid-cols-2 items-center justify-end gap-2 md:gap-10">
            <h1 className="text-right text-xl font-medium uppercase text-brandDark/80 md:text-3xl md:font-medium lg:text-5xl">
              {symptom.title}
            </h1>
            <div className="relative h-[110px] w-[183px] sm:h-[220px] sm:w-[366px] md:h-[220px] md:w-[366px] lg:h-[330px] lg:w-[549px]">
              <Image src={`/images/symptoms/${symptom.imageUrl}`} alt={`${symptom.title} Image`} fill={true} />
            </div>
          </div>
        </div>
        <div className="mx-5 mt-8 sm:mx-8 sm:mt-12 md:mx-12 md:mt-16 lg:mx-32">
          {symptom.description.map((item, index) => (
            <p key={index} className="mx-2 text-sm sm:text-base ">
              {item}
            </p>
          ))}
        </div>

        <div className="mx-3 sm:mx-8 sm:mt-12 md:mx-12 md:mt-16 lg:mx-32">
          <h4 className="mx-2 mt-6 text-lg font-bold">Sections:</h4>
          <div className="mt-0 grid grid-cols-2">
            <div id="sections">
              <div className="mt-4 flex h-full flex-col items-center justify-start space-y-3 pr-4">
                <Link href="#symptoms" className="w-full max-w-[180px]">
                  <Button variant="secondary" className="text-md h-fit w-full py-1 text-primary">
                    Symptoms
                  </Button>
                </Link>
                <Link href="#treatments" className="w-full max-w-[180px]">
                  <Button variant="secondary" className="text-md h-fit w-full py-1 text-primary">
                    Treatments
                  </Button>
                </Link>
                <Link href="#medications" className="w-full max-w-[180px]">
                  <Button variant="secondary" className="text-md h-fit w-full max-w-[180px] py-1 text-primary">
                    Medications
                  </Button>
                </Link>
                <Button variant="secondary" className="text-md h-fit w-full max-w-[180px] py-1 text-primary">
                  Studies
                </Button>
                <Button variant="secondary" className="text-md h-fit w-full max-w-[180px] py-1 text-primary">
                  In the News
                </Button>
              </div>
            </div>

            <div id="disclaimer" className="mt-4">
              <h4 className="text-xs font-black uppercase text-red-600/70">Warning / Legal Disclaimer</h4>
              <p className="text-xs">
                Below is a list of what other community members have experienced for symptoms, treatments and
                medications. This is meant to provide you with the information necessary to educate yourself and see
                that you aren’t alone.{" "}
                <span className="font-bold">These are in no way recommendations for your specific condition. </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-brandDark py-8 pl-6 pr-2 text-brandLight ">
        <div className=" mx-auto max-w-[1024px]">
          <h4 className="text-xl font-bold text-brandSecondary">Please Help Another</h4>
          <p className="ml-6 mr-3 text-base md:mx-10 md:mt-5 lg:mx-12 ">
            Your Long COVID symptoms provide clues to help others. Please share your thoughts with us and together we
            may provide another with relief.
          </p>
          <div className="flex w-full justify-end ">
            <Link href="/contact/share">
              <Button className="mx-3 mt-4 h-8 lg:mx-12">Share your experience</Button>
            </Link>
          </div>
        </div>
      </div>

      <div id="symptoms" className="">
        <div className=" mx-auto max-w-[1024px]">
          <h4 className="mt-6 bg-brandSecondary px-6 py-2 text-lg font-medium uppercase text-brandDark">Symptoms:</h4>
          <div className="">
            {/* {symptom.symptoms.map((symptom, index) => {
            return (
              <div key={symptom} className={`py-3 ${index % 2 === 0 ? "" : "bg-brandSecondary/10"}`}>
              <p className="text-md mt-1 pl-11 pr-5 font-medium ">
              {index + 1}. {symptom}
              </p>
              </div>
              );
            })} */}
            {symptom.symptoms.map((symptomText, index) => {
              const parts = symptomText.split(":"); // Split the symptom text at the colon
              const firstPart = parts[0] + (parts.length > 1 ? ":" : ""); // Add the colon back to the end of the first part

              return (
                <div key={symptomText} className={`py-3 ${index % 2 === 0 ? "" : "bg-brandSecondary/10"}`}>
                  <p className="text-md mt-1 pl-11 pr-5 font-medium">
                    <strong>
                      {index + 1}. {firstPart}
                    </strong>
                    {parts.length > 1 ? parts.slice(1).join(":") : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div id="treatments" className="">
        <div className=" mx-auto max-w-[1024px]">
          <h4 className="mt-6 bg-brandDark px-6 py-2 text-lg font-medium uppercase text-brandSecondary">Treatments:</h4>
          {symptom.treatments.map((treatment, index) => {
            const parts = treatment.split(":"); // Split the symptom text at the colon
            const firstPart = parts[0] + (parts.length > 1 ? ":" : ""); // Add the colon back to the end of the first part

            return (
              <div key={index} className={`py-5 ${index % 2 === 0 ? "" : "bg-brandSecondary/10"}`}>
                <p className="text-md mt-1 pl-11 pr-5 font-medium">
                  <strong>
                    {index + 1}. {firstPart}
                  </strong>
                  {parts.length > 1 ? parts.slice(1).join(":") : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div id="medications" className="">
        <div className=" mx-auto max-w-[1024px]">
          <h4 className="mt-6 bg-brandSecondary px-6 py-2 text-lg font-medium uppercase text-brandDark">
            Medications:
          </h4>
          {symptom.medications.map((medication, index) => {
            const parts = medication.split(":"); // Split the symptom text at the colon
            const firstPart = parts[0] + (parts.length > 1 ? ":" : ""); // Add the colon back to the end of the first part

            return (
              <div key={index} className={`py-5 ${index % 2 === 0 ? "" : "bg-brandSecondary/10"}`}>
                <p className="text-md mt-1 pl-11 pr-5 font-medium">
                  <strong>
                    {index + 1}. {firstPart}
                  </strong>
                  {parts.length > 1 ? parts.slice(1).join(":") : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <p></p>
    </div>
  );
};

export default SymptomCard;
