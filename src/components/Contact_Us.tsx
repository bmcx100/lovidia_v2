"use client";

import Link from "next/link";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Breakpoints from "./tgg-utils/tggBreakpointBars";
import { sendContactUs } from "@/hooks/sendContactUs";
import { formSchemaContactUs } from "@/constants/contactUsForm";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Contact_Us = () => {
  const form = useForm<z.infer<typeof formSchemaContactUs>>({
    resolver: zodResolver(formSchemaContactUs),
    defaultValues: {
      topic: "select",
      emailAddress: "",
      name: "",
      message: "",
    },
  });

  const {
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchemaContactUs),
  });

  const { toast } = useToast();

  const localHandleSubmit = (values: z.infer<typeof formSchemaContactUs>) => {
    console.log(values);
    sendContactUs(values);
    form.reset();
    toast({
      title: "Contact Form Submitted",
      description: "Thank you for contacting us. We will respond to your message as soon as possible.",
    });
  };

  const emailAddressToCopy = "contact@lovidia.net";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddressToCopy);
      toast({
        title: `${emailAddressToCopy} copied to clipboard`,
        description: "Thank you for your interest in contacting us. We look forward to hearing from you.",
      });
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div>
      {/* <Breakpoints /> */}
      <div className="mx-auto  max-w-[1024px] ">
        <div>
          <div>
            <h2 className="px-3 text-xl sm:pl-16 sm:text-2xl">We&apos;re&nbsp;Listening</h2>
            <h2 className="-mx-5 mb-3 mt-0  bg-brandSecondary  px-8 py-2 text-3xl capitalize sm:pl-20 sm:text-5xl">
              Tell Us Your&nbsp;Story
            </h2>
          </div>

          <div className=" px-3  text-sm sm:pl-16 sm:text-base">
            <p>
              Alternatively, if you would prefer email you can contact us at{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex h-fit items-center justify-end">
                      <span onClick={handleCopy} className="cursor-pointer font-medium text-brandLinkBlue">
                        contact@lovidia.net
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="px-2 py-1">
                    <p className="m-0">Click to Copy to Clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
          </div>
        </div>
        <div className="mx-3 mt-8 min-w-[350px] rounded-lg bg-brandSecondary/30 px-3 py-5 drop-shadow-sm sm:mx-auto sm:mt-12 sm:max-w-lg  sm:py-8">
          <div className="min-w-[330px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(localHandleSubmit)}
                className="mx-auto flex w-full max-w-md flex-col gap-5"
              >
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Topic</FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="select">Select An Option</SelectItem>
                            <SelectItem value="share">Share Your Story</SelectItem>
                            <SelectItem value="suggestion">Suggestion For Lovidia</SelectItem>
                            <SelectItem value="help">Want To Help</SelectItem>
                            <SelectItem value="recipe">Recipe Submission</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" type="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="Email Address" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-[200px] resize-none"
                            placeholder="Enter your message here..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
