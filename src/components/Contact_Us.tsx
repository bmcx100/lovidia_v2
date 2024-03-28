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
import Breakpoints from "./tgg-utils/Breakpoints";
import { sendContactUs } from "@/hooks/sendContactUs";
import { formSchemaContactUs } from "@/constants/contactUsForm";

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

  const localHandleSubmit = (values: z.infer<typeof formSchemaContactUs>) => {
    console.log(values);
    sendContactUs(values);
  };

  const emailAddressToCopy = "contact@lovidia.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddressToCopy);
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
            <h2 className="px-3 text-xl sm:pl-16 sm:text-2xl">Let Us Know What&nbsp;You're&nbsp;Thinking.</h2>
            <h2 className="-mx-5 mb-3 mt-0  bg-brandSecondary  px-8 py-2 text-3xl capitalize sm:pl-20 sm:text-5xl">
              We're here to&nbsp;help
            </h2>
          </div>

          <div className=" px-3  text-sm sm:pl-16 sm:text-base">
            <p>
              You can also always email us at{" "}
              <span onClick={handleCopy} className="cursor-pointer font-medium text-brandLinkBlue">
                contact@lovidia.com
              </span>{" "}
              to let us know whatever&nbsp;is on your&nbsp;mind.
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
                            <SelectItem value="suggestion">Suggestion for Lophia</SelectItem>
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
