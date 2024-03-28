import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    // <div
    //   className="mx-auto min-w-[330px] max-w-[1024px] overflow-hidden border-2
    // border-red-400 sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px]"
    // >
    <div className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      <div className="mx-4 mt-8">
        <div className="relative flex flex-col items-end gap-5 xs:p-6 sm:px-10 md:px-20 lg:px-10 lg:pt-9 ">
          <h1 className="z-10 w-80 self-start text-3xl font-normal sm:text-4xl lg:w-[420px] lg:text-5xl">
            Your <span className="font-black tracking-tighter">Long COVID </span>
            Resource Website
          </h1>
          <div className="z-1 absolute left-1 top-5 h-2 w-[250px] bg-brandSecondary xs:left-6 xs:top-11 sm:left-10 sm:top-12 sm:w-[310px] md:left-20 md:top-12 lg:left-8 lg:top-16 lg:h-3 lg:w-[410px]"></div>
          <p className="mt-2 w-3/4 min-w-72 xs:mr-4 sm:ml-32 sm:max-w-[320px] sm:self-center sm:text-lg md:max-w-[400px] md:text-xl lg:ml-72 lg:max-w-[430px] lg:py-8 lg:text-2xl">
            Alleviating symptoms, simplying access to information and leveraging our numbers to create change.
          </p>
          <Link href="/contact?type=share">
            <Button variant="default" className="mt-4 lg:px-6 lg:py-4 lg:text-lg">
              Tell Us Your Story
            </Button>
          </Link>
        </div>
        <div className="mt-5 lg:mt-10"></div>
      </div>
    </div>
  );
};

export default Hero;
