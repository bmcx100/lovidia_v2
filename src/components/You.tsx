"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Divider from "./Divider";
import Link from "next/link";
import Image from "next/image";
// import copyIcon from "/images/general/copy.svg";
import BreakpointIdentifier from "./tgg-utils/BreakpointIdentifier";
import Breakpoints from "./tgg-utils/Breakpoints";
import { sendEmail } from "@/hooks/sendEmail";
import { subscribeToNewsletter } from "@/hooks/subscribeToNewsletter";

const You = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your subscription logic here
    console.log("Subscribing with email:", email);
    await subscribeToNewsletter(email);
    setEmail("");
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
    <section className="mx-3 mt-6 min-w-[330px]">
      {/* <Breakpoints /> */}
      <div className="mx-auto  max-w-[1024px] xs:px-5 lg:pl-12">
        <h2 className="mt-8 text-left text-3xl font-medium lg:text-4xl">Want To Help?</h2>
        <p className="ml-2 mt-2 leading-3 lg:ml-6 lg:mt-8">
          <span className="text-lg font-bold leading-8 lg:text-2xl">Two Super Easy Steps</span> will make a huge
          difference in how we help others.
        </p>
        <div className="items-start justify-center lg:grid lg:grid-cols-2">
          <div className="mt-8 xs:mt-14 md:mt-20 md:flex md:items-start md:justify-start lg:flex-col">
            <div className="w-fit -rotate-12 rounded-md bg-brandSecondary px-8 py-2 text-lg font-medium lg:ml-0">
              Step 1
            </div>
            <div className="flex-col items-start justify-start lg:h-[300px] ">
              <h3 className="ml-5 mt-8 text-lg font-bold capitalize sm:ml-10 sm:mt-5 md:text-2xl lg:ml-0 lg:mt-10">
                Sign Up for our Newsletter.
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="my-5 flex justify-between rounded-full bg-white py-2 pl-5 pr-3 focus:outline-none">
                  <input
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email address"
                    className="w-full focus:border-white focus:outline-none"
                  />
                  <Button type="submit" className="px-6 sm:px-8">
                    Subscribe
                  </Button>
                </div>
              </form>

              <p className=" ml-4 mr-2 mt-2  max-w-[420px] leading-normal sm:ml-16 sm:mt-5 md:-ml-20 md:max-w-none lg:ml-0 lg:mt-0 lg:max-w-[400px]">
                You pick what info and how often, but sign up and be a number for change.
              </p>
            </div>
          </div>
          <div className="mt-6 xs:mt-14 md:mt-20">
            <div className="md:flex lg:flex-col ">
              <div className="flex items-end justify-between">
                <div className="-rotate-12 rounded-md bg-brandSecondary px-8 py-2 text-lg  font-medium ">Step 2</div>

                {/* <p>CONFIDENTIAL</p> */}
              </div>
              <h3 className="ml-5 mt-8 text-lg font-bold capitalize sm:ml-10 md:ml-8 md:text-2xl lg:-ml-0 lg:mt-10">
                Share your experience.
              </h3>
            </div>

            <div className="mx-5 flex flex-col items-center sm:justify-center md:mx-24 md:mt-8 lg:mx-0 lg:mt-5 lg:h-[56px] lg:w-full lg:flex-row lg:justify-start">
              <div className="mb-3 mt-6 w-fit self-start rounded-full bg-white lg:m-0">
                <Button
                  onClick={handleCopy}
                  className="h-[56px] bg-white text-base lowercase sm:self-center lg:mx-0 lg:mt-0"
                  variant="white"
                >
                  <Image src="/images/general/copy.svg" alt="copy paste icon" width={20} height={20} />
                  <div className="ml-3">contact@lovidia.com</div>
                </Button>
              </div>

              <p className="my-2 text-center text-sm font-bold lg:hidden">OR</p>
              <Link className="mt-3 self-end sm:ml-[50%] sm:self-center lg:m-0 " href="/contact">
                <Button className=" h-[56px] w-44 py-4 text-base lg:ml-20  ">Contact Form</Button>
              </Link>
            </div>
            <p className="ml-6 mr-4 mt-6 text-base leading-normal sm:ml-16 sm:mt-5 md:mx-10  md:my-10 md:max-w-[580px] lg:mx-0 lg:mt-5 lg:max-w-[400px] ">
              Learning about your experience with Long COVID is essential to us helping others, please help us.
            </p>

            <div className="mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default You;
