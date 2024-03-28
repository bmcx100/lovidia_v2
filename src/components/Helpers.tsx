import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Helpers = () => {
  return (
    <div className="mb-12  min-w-[330px] bg-secondary pb-16 pt-5 md:pb-32 md:pt-12">
      <div className="mx-auto  max-w-[1024px] ">
        <div className="ml-3 text-brandLight xs:ml-8 sm:ml-16 md:ml-24">
          <h2 className="m-0 p-0 font-normal xs:font-medium sm:mb-2 lg:text-4xl">
            Our Helpers
          </h2>
          <p className="m-0 ml-4 p-0 lg:ml-8 lg:text-xl">
            Click for information on:
          </p>
        </div>
        <div className="mx-4 mt-5 flex h-[150px] items-center justify-center gap-[10%] xs:mt-10 sm:mt-20 md:mt-32">
          <div>
            <Image
              src="/images/helpers.png"
              alt="illustration of a man standing looking off into the distance"
              width={337}
              height={337}
              className="w-[150px] drop-shadow-lg xs:w-[200px] sm:w-[300px] md:w-[337px]"
            />
          </div>
          <div className="flex h-full flex-col justify-around gap-3 ">
            <Button>
              <Link href="/recipes">Long COVID Diet</Link>
            </Button>
            <Button>
              <Link href="/news">News and Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpers;
