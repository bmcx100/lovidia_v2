"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
import { ConclusionSchema } from "@/constants/contactData";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

type ContactFormProps = {
  // items: string [];
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const Contact_Form_Conclusion = ({ currentPage, totalPages, handleNext, handlePrev }: ContactFormProps) => {
  const form = useForm<z.infer<typeof ConclusionSchema>>({
    resolver: zodResolver(ConclusionSchema),
    defaultValues: {
      newsletter: false,
      followup: false,
      community: false,
      conclusionComments: "",
    },
  });

  const paginationProgBar = Array.from({ length: totalPages }, (_, index) => {
    if (currentPage === index + 1) {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandLight"></div>;
    } else {
      return <div key={index} className="z-10 h-4 w-4 rounded-full bg-brandDark "></div>;
    }
  });

  const thisHandleSubmit = (values: z.infer<typeof ConclusionSchema>) => {
    console.log({ values });
  };

  return (
    <Card className=" ">
      <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-4 py-4">
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="m-0 text-xl font-medium">Conclusion</CardTitle>
        </div>
        <div className="relative mx-auto flex w-3/4 justify-between pt-2">
          {paginationProgBar}
          <div className="absolute bottom-1.5 z-0 h-1 w-[calc(100%-4px)] bg-brandDark"></div>
        </div>
      </CardHeader>

      <CardDescription className="py-1 pl-6 pr-3">
        <p className="text-lg font-medium text-brandDark">
          Thank you for taking the time to share with us, please submit your form below.
        </p>
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
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Join our Newsletter.</FormLabel>
                    <FormDescription>
                      Stop researching on your own. Receive your customized updates on the areas you find most
                      interesting. Get them as often or rarely as you like and start making our numbers our strength.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="followup"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I want to share my story. Please send me details.</FormLabel>
                    <FormDescription>
                      Anonomously is fine, but sharing your story can be therapeutic for you and others in the
                      community.{" "}
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="community"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>I want to get involved and help others. Please contact me.</FormLabel>
                    <FormDescription>
                      If you feel you can contribute please let us know. Whether you&apos;re an expert in your field or
                      a passionate person with good ideas we&apos;d love to talk to you.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="conclusionComments"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Comments / Thoughts:</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Please share anything you didn't have a chance to share earlier."
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

export default Contact_Form_Conclusion;
