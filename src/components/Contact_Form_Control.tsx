"use client";

import React from "react";
import Contact_Form_PersonalInfo from "./Contact_Form_PersonalInfo";
import Contact_Form_Symptoms from "./Contact_Form_Symptoms";
import Contact_Form_Conclusion from "./Contact_Form_Conclusion";
import Contact_Form_Feedback from "./Contact_Form_Feedback";
import Contact_Form_Support from "./Contact_Form_Support";
import Contact_Form_Impact from "./Contact_Form_Impact";
import Contact_Form_Treatments from "./Contact_Form_Treatments";
import Contact_Form_MedicalHistory from "./Contact_Form_MedicalHistory";
import Contact_Form_Welcome from "./Contact_Form_Welcome";

// Define a type for the components map
type FormComponentsMap = {
  [key: number]: React.ElementType;
};

const formComponents: FormComponentsMap = {
  1: Contact_Form_Welcome,
  2: Contact_Form_PersonalInfo,
  3: Contact_Form_Symptoms,
  4: Contact_Form_Treatments,
  5: Contact_Form_Impact,
  6: Contact_Form_Support,
  7: Contact_Form_Feedback,
  8: Contact_Form_Conclusion,
};
export default function Contact_Form_Control() {
  const totalPages = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  function handlePrev() {
    if (currentPage > 1) setCurrentPage((prevState) => prevState - 1);
  }

  function handleNext() {
    if (currentPage < totalPages) setCurrentPage((prevState) => prevState + 1);
  }
  const CurrentFormComponent = formComponents[currentPage];

  return (
    <div>
      {CurrentFormComponent && (
        <div className="mx-auto w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px]">
          <CurrentFormComponent
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
}
