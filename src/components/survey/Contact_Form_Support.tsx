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
import Divider from "../Divider";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SupportSchema } from "@/constants/contactData";
import { Textarea } from "../ui/textarea";

type ContactFormProps = {
  // items: string [];
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const Contact_Form_Support = ({ currentPage, totalPages, handleNext, handlePrev }: ContactFormProps) => {
  const form = useForm<z.infer<typeof SupportSchema>>({
    resolver: zodResolver(SupportSchema),
    defaultValues: {
      received: "",
      additional: "",
      supportComments: "",
    },
  });

  const paginationProgBar = Array.from({ length: totalPages }, (_, index) => {
    if (currentPage === index + 1) {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandLight"></div>;
    } else {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandDark "></div>;
    }
  });

  const thisHandleSubmit = (values: z.infer<typeof SupportSchema>) => {
    console.log({ values });
  };

  return (
    <Card className=" ">
      <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="m-0 text-xl font-medium">Support Systems</CardTitle>
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
      <CardContent className="mt-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(thisHandleSubmit)}
            className=" mx-auto flex max-w-xs flex-col justify-center gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            <FormField
              control={form.control}
              name="received"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="capitalize">types of support:</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="What types of support have you received (medical, psychological, community, etc.)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="additional"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="capitalize">Additional Support Needed:</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="What additional support do you think should be available and/or what areas need improvement?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="supportComments"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="capitalize">Comments / Thoughts:</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Please share any other thoughts you have on treatments." />
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

export default Contact_Form_Support;
