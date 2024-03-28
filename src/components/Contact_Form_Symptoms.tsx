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
import { LongCovidFormSchema } from "@/constants/contactData";
import { Textarea } from "./ui/textarea";

type ContactFormProps = {
  // items: string [];
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const Contact_Form_Symptoms = ({ currentPage, totalPages, handleNext, handlePrev }: ContactFormProps) => {
  const form = useForm<z.infer<typeof LongCovidFormSchema>>({
    resolver: zodResolver(LongCovidFormSchema),
    defaultValues: {
      severe: "",
      minor: "",
      impact: "",
    },
  });

  const paginationProgBar = Array.from({ length: totalPages }, (_, index) => {
    if (currentPage === index + 1) {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandLight"></div>;
    } else {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandDark "></div>;
    }
  });

  const thisHandleSubmit = (values: z.infer<typeof LongCovidFormSchema>) => {
    console.log({ values });
  };

  return (
    <Card className=" ">
      <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-4 py-4">
        <div className="flex flex-row items-start justify-between">
          <CardTitle className="m-0 text-xl font-medium">Your Symptoms</CardTitle>
        </div>
        <div className="relative mx-auto flex w-3/4 justify-between pt-2">
          {paginationProgBar}
          <div className="absolute bottom-1.5 z-0 h-1 w-[calc(100%-4px)] bg-brandDark"></div>
        </div>
      </CardHeader>

      <CardDescription className="py-1 pl-6 pr-3">
        <p>Share as much or as little as you like... </p>
      </CardDescription>
      <Divider />
      <CardContent className="mt-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(thisHandleSubmit)}
            className=" mx-auto flex max-w-xs flex-col justify-center gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            <div className="grid grid-cols-2 gap-1">
              {/* <p className="col-span-2 gap-0 text-base">When did you first notice your Long COVID symptoms?</p> */}
              <FormLabel className="col-span-3 my-2 leading-relaxed">
                When did you first notice your Long COVID symptoms?
              </FormLabel>

              <FormField
                control={form.control}
                name="month"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Month</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select One" />

                            <SelectContent>
                              <SelectItem value="not_applicable">Not Applicable</SelectItem>
                              <SelectItem value="January">January</SelectItem>
                              <SelectItem value="February">February</SelectItem>
                              <SelectItem value="March">March</SelectItem>
                              <SelectItem value="April">April</SelectItem>
                              <SelectItem value="May">May</SelectItem>
                              <SelectItem value="June">June</SelectItem>
                              <SelectItem value="July">July</SelectItem>
                              <SelectItem value="August">August</SelectItem>
                              <SelectItem value="September">September</SelectItem>
                              <SelectItem value="October">October</SelectItem>
                              <SelectItem value="November">November</SelectItem>
                              <SelectItem value="December">December</SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </FormControl>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select One" />

                            <SelectContent>
                              <SelectItem value="Not applicable">Not applicable</SelectItem>
                              <SelectItem value="2019">2019</SelectItem>
                              <SelectItem value="2020">2020</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2024">2024</SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </FormControl>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <FormField
              control={form.control}
              name="severe"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Severe Symptoms:</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Please list any Severe Symptoms you've experienced." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="minor"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Minor Symptoms:</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Please list any Minor Symptoms you've experienced." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="impact"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Comments / Thoughts:</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="How have these symptoms impacted your daily life and activities?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </form>
        </Form>
      </CardContent>
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

export default Contact_Form_Symptoms;

// <div className="flex flex-col items-center justify-center">
//   <div className="flex">
//     <PaginationItem>
//       <PaginationLink href="#">1</PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#" isActive>
//         2<PaginationItem></PaginationItem>
//       </PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#">3</PaginationLink>
//     </PaginationItem>
//     <PaginationEllipsis />
//   </div>
// </div>
