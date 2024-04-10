import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Breakpoints from "./tgg-utils/tggBreakpointBars";
import newsImage from "@/../public/images/resources/news.webp";

const Resources = () => {
  return (
    <div className="mb-12  min-w-[330px] bg-secondary pb-16 pt-5 md:pb-32 md:pt-12">
      <div className="mx-auto  max-w-[1024px] ">
        <div className="ml-3 text-brandLight xs:ml-8 sm:ml-16 md:ml-24">
          <h2 className="m-0 p-0 font-normal xs:font-medium sm:mb-2 lg:text-4xl">Our Resources</h2>
          <p className="m-0 ml-4 p-0 lg:ml-8 lg:text-xl">Click for information on:</p>
        </div>
        <div className=" mx-4 mt-5 flex h-full items-center justify-center gap-4">
          {/* <div>
            <Image
              src="/images/resources.png"
              alt="illustration of a man standing looking off into the distance"
              width={337}
              height={337}
              className="w-[150px] drop-shadow-lg xs:w-[200px] sm:w-[300px] md:w-[337px]"
            />
          </div> */}

          <div className="mx-auto mt-4 flex h-[110px] w-full items-center justify-center overflow-clip sm:h-[220px]  md:h-[330px] lg:h-[330px]">
            <Image src={newsImage} alt={`Image of a couple doing research`} />
            {/* <Image
              src={`/images/resources/news.png`}
              alt={`Image of a couple doing research`}
              width={549}
              height={330}
              className="mt-4"
            /> */}
          </div>

          <div className=" mx-auto flex h-full w-1/2 flex-col items-center justify-around gap-3 sm:mr-4 sm:gap-8 md:gap-16">
            <Button className="mx-auto w-full">
              <Link href="/recipes">Long COVID Diet</Link>
            </Button>
            <Button className="mx-auto w-full">
              <Link href="/news">News and Research</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <Breakpoints /> */}
    </div>
  );
};

export default Resources;
