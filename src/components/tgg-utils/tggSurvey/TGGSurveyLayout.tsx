"use client";

import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import { Form } from "react-hook-form";

type SurveyLayoutProps = {
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleGoto: (page: number) => void;
};

const TGGSurveyLayout: React.FC<SurveyLayoutProps> = ({
  totalPages,
  currentPage,
  handlePrev,
  handleNext,
  handleSubmit,
  handleGoto,
  children,
}) => {
  const paginationProgBar = Array.from({ length: totalPages }, (_, index) => {
    if (currentPage === index + 1) {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandLight"></div>;
    } else {
      return (
        <div key={index} onClick={() => handleGoto(index)} className="z-10 h-4 w-4 rounded-full bg-brandDark "></div>
      );
    }
  });

  return (
    <div className="mx-2">
      <Card className="mx-auto w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px]">
        <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-2 pt-6">
          <div className="flex flex-row items-start justify-center">
            <CardTitle className="m-0 text-xl font-medium">Share Your Experience</CardTitle>
          </div>
          <div className="relative mx-auto flex w-3/4 justify-between pt-2">
            {paginationProgBar}
            <div className="absolute bottom-1.5 z-0 h-1 w-[calc(100%-4px)] bg-brandDark"></div>
          </div>
        </CardHeader>
        {/* NOT FIRST PAGE */}
        {currentPage > 1 && (
          <div>
            <CardDescription className="py-1 pl-6 pr-3 sm:px-12 ">
              Share as much or as little information as you feel comfortable with. No answers are required, this form is
              simply meant to make it easier to talk about your experience.
            </CardDescription>
            <Divider />
          </div>
        )}
        <CardContent className="mt-5 py-0">
          <form
            onSubmit={handleSubmit}
            className=" mx-auto flex max-w-xs flex-col justify-center  md:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            {children}
            <div className="mt-1">
              <Divider />
              <div className="mt-2 flex justify-center">
                <Button type="submit" className="mx-auto w-3/4">
                  {currentPage < totalPages ? "Continue" : "Submit"}
                </Button>
              </div>
            </div>

            <Divider />
            <div className="my-0 mb-2 flex h-fit items-center justify-start px-0 py-0">
              {currentPage > 1 && (
                <Button type="button" variant="ghost" onClick={handlePrev} className="my-0 px-3 py-1 ">
                  prev
                </Button>
              )}
              {currentPage < totalPages && (
                <Button type="button" variant="ghost" onClick={handleNext} className="my-0 ml-auto px-3 py-1 ">
                  skip
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TGGSurveyLayout;
