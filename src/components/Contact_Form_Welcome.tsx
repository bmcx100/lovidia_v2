"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Divider from "./Divider";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ImpactFormSchema } from "@/constants/contactData";
import { Textarea } from "./ui/textarea";

type ContactFormProps = {
  // items: string [];
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const Contact_Form_Impact = ({ currentPage, totalPages, handleNext, handlePrev }: ContactFormProps) => {
  const form = useForm<z.infer<typeof ImpactFormSchema>>({
    resolver: zodResolver(ImpactFormSchema),
    defaultValues: {
      affects: "",
      managing: "",
      impactComments: "",
    },
  });
  const paginationProgBar = Array.from({ length: totalPages }, (_, index) => {
    if (currentPage === index + 1) {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandLight"></div>;
    } else {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandDark "></div>;
    }
  });

  const thisHandleSubmit = (values: z.infer<typeof ImpactFormSchema>) => {
    console.log({ values });
  };

  return (
    <Card>
      <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="m-0 text-xl font-medium">Share Your Experience</CardTitle>
        </div>
        <div className="relative mx-auto flex w-3/4 justify-between pt-2">
          {paginationProgBar}
          <div className="absolute bottom-1.5 z-0 h-1 w-[calc(100%-4px)] bg-brandDark"></div>
        </div>
      </CardHeader>

      <CardDescription className="py-1 pl-3 pr-3">
        <p className="mt-5 pl-3 text-base font-medium text-brandDark">
          This questionaire is designed to prompt you to share your experience. Answer as little or as much as you feel
          comfortable with.
        </p>
      </CardDescription>
      <CardContent className="mt-0"></CardContent>
      <Divider />
      <div className="pl-3 pr-3">
        <p className="mt-5 pl-3 text-base font-medium text-brandDark">
          If you&apos;d prefer to share without the prompts. You can email us at share@lovidia.com or click this form.
        </p>
        <div className="my-5 flex w-full justify-center">
          <Button variant={"outline"} className="h-7 w-3/4">
            Contact Us Form
          </Button>
        </div>
      </div>
      <Divider />
      <CardFooter className="mb-0 mt-2">
        <Pagination className="mb-0 mt-2">
          <PaginationContent className="w-full">
            <div className="flex w-full flex-col items-stretch justify-start ">
              <div className="mt-1 flex justify-between">
                <PaginationItem>
                  <PaginationPrevious
                    className={currentPage === 1 ? "cursor-default opacity-0" : ""}
                    href="#"
                    onClick={() => handlePrev()}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={currentPage === totalPages ? "cursor-default opacity-0" : ""}
                    href="#"
                    onClick={() => handleNext()}
                  />
                </PaginationItem>
              </div>
              {currentPage === totalPages && (
                <Button type="submit" className="mt-5 w-full">
                  Submit
                </Button>
              )}
            </div>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default Contact_Form_Impact;
