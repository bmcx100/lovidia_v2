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

const formSchema = z.object({
  topic: z.enum(["select", "share", "suggestion", "recipe", "other"]),
  name: z.string(),
  emailAddress: z.string(),
  message: z.string(),
});

const Contact_Us = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "select",
      name: "",
      emailAddress: "",
      message: "",
    },
  });

  const localHandleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("submitted");
    console.log({ values });
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
    <div className="mx-auto  max-w-[1024px] ">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div>
            <h2 className="text-2xl">Let Us Know What You're&nbsp;Thinking.</h2>
            <h2 className="-mx-5 my-5 bg-brandSecondary px-5 py-2 text-5xl">We're here to help</h2>
          </div>

          <div className="">
            <p>
              You can also always email us at{" "}
              <span onClick={handleCopy} className="cursor-pointer text-brandPrimary">
                contact@lovidia.com
              </span>{" "}
              to let us know about anything that's on your mind.
            </p>
          </div>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(localHandleSubmit)}
              className="flex w-full max-w-md flex-col gap-4 bg-brandSecondary/10 px-4 py-12"
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email Address" type="name" {...field} />
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
                        <Textarea placeholder="Enter your message here..." {...field} />
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
  );
};

export default Contact_Us;
