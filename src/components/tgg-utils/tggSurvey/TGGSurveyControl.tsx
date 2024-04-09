"use client";

import React from "react";
import { SurveyFormSchema, SurveyFormDataType, TFormComponentController } from "./surveyData";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import TGGSurveyLayout from "./TGGSurveyLayout";
import Contact_Form_PersonalInfo from "./pages/Contact_Form_PersonalInfo";
import Contact_Form_Welcome from "./pages/Contact_Form_Welcome";
import Contact_Form_Symptoms from "./pages/Contact_Form_Symptoms";
import Contact_Form_Treatments from "./pages/Contact_Form_Treatments";
import { sendSurvey } from "./sendSurvey";

const TGGSurveyControl = () => {
  const SurveyFormData = useForm<SurveyFormDataType>({
    resolver: zodResolver(SurveyFormSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      age: "select",
      location: "select",
      symptomsSevere: "",
      symptomsMinor: "",
      symptomsComments: "",
      treatmentsImpact: "",
      treatmentsHelpful: "",
      treatmentComments: "",
      impact: "",
      affects: "",
      managing: "",
      impactComments: "",
      received: "",
      additional: "",
      supportComments: "",
      suggestions: "",
      topics: "",
      feedbackComments: "",
      newsletter: false,
      followup: false,
      community: false,
      conclusionComments: "",
      isComplete: false,
    },
  });

  const totalPages = 4;

  const FormComponentController: TFormComponentController = {
    1: Contact_Form_Welcome,
    2: Contact_Form_PersonalInfo,
    3: Contact_Form_Symptoms,
    4: Contact_Form_Treatments,
    // 5: Contact_Form_Impact,
    // 6: Contact_Form_Support,
    // 7: Contact_Form_Feedback,
    // 8: Contact_Form_Conclusion,
  };

  const router = useRouter();

  //SUBMITTING LOGIC
  const { handleSubmit, setValue, reset } = SurveyFormData;

  const onSubmit = (data: SurveyFormDataType) => {
    console.log("onSubmit triggered with data:", data);

    try {
      // Simulate form processing logic
      // console.log("c Processing form data...");
      console.log(`Page: ${currentPage} of Pages: ${totalPages}`);
      // PAGE WHERE FINAL SUBMIT BUTTON IS CLICKED
      // //
      if (currentPage === totalPages) {
        console.log("Official Submission");
        setValue("isComplete", true);
        sendSurvey(data);
        reset();
        router.push("/contact/share/completed");
      } else if (currentPage < totalPages) {
        // NEXT PAGE SUBMIT
        sendSurvey(data);
        setCurrentPage((prevState) => prevState + 1);
      }
      //   form.reset();
      //   toast({
      //     title: "Contact Form Submitted",
      //     description: "Thank you for contacting us. We will respond to your message as soon as possible.",
      //   });
      // };
      // If there's an async operation, ensure it's awaited or handled properly
      // For example:
      // await sendDataToServer(data);

      console.log("Form processing complete.");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // Call the handleSubmit function when the form is submitted
  const handleFormSubmit = SurveyFormData.handleSubmit(onSubmit);
  const wrappedHandleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // console.log("a Form submit started");
    // PAGE WHERE SUBMIT BUTTON IS JUST A SKIP (NO FORM INPUTS)
    if (currentPage === 1) {
      console.log("page skipped");
      setCurrentPage((prevState) => prevState + 1);
    }

    handleFormSubmit(event)
      .then(() => {
        // console.log("m Form submit finished");
      })
      .catch((error) => {
        console.error("Error in form submission process:", error);
      });
  };

  function handlePrev() {
    if (currentPage > 1) setCurrentPage((prevState) => prevState - 1);
    console.log("prev");
  }

  function handleNext() {
    console.log("next");
    // const currentFormData = getValues();
    // console.log("handleNext: Current form data:", currentFormData);
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  }

  const [currentPage, setCurrentPage] = React.useState(1);
  const CurrentFormComponent = FormComponentController[currentPage];

  return (
    <FormProvider {...SurveyFormData}>
      <div>
        <TGGSurveyLayout
          totalPages={totalPages}
          currentPage={currentPage}
          handlePrev={handlePrev}
          handleSubmit={wrappedHandleFormSubmit} // Pass the handleSubmit function for form submission
          handleNext={handleNext}
        >
          <CurrentFormComponent formData={SurveyFormData} />
        </TGGSurveyLayout>
      </div>
    </FormProvider>
  );
};

export default TGGSurveyControl;
